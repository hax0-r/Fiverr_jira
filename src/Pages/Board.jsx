import { useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import { Column } from '../Components/Column';
import { COLUMNS, INITIAL_TASKS } from '../Data/DATA';
import { IoIosSearch } from 'react-icons/io';
import { toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';
import UserProfiles from '../Components/UserProfiles';
import TagsDropdown from '../Components/TagsDropdown';

export default function Board() {
    const { state } = useLocation();
    const role = state?.role || 'user'; // Default to 'user' if no role is provided

    const [tasks, setTasks] = useState(INITIAL_TASKS);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedTag, setSelectedTag] = useState('All Tags');

    const tagMapping = {
        'Tag 1': 1,
        'Tag 2': 2,
        'Tag 3': 3,
        'Tag 4': 4,
    };

    const handleSelectTag = (option) => {
        setSelectedTag(option);
    };

    const handleDragEnd = (event) => {
        if (role !== 'admin') {
            toast.error('Only admins can move tasks!');
            return;
        }

        const { active, over } = event;

        if (!over) {
            return;
        }


        const taskId = active.id;
        const newStatus = over.id;

        const columnOrder = ['TODO', 'IN_PROGRESS', 'Review', 'Acceptance', 'Demo', 'DONE'];
        const currentTask = tasks.find((task) => task.id === taskId);
        const currentStatus = currentTask?.status;
        const currentIndex = columnOrder.indexOf(currentStatus);
        const newIndex = columnOrder.indexOf(newStatus);

        if (newIndex === currentIndex + 1) {
            setTasks(() =>
                tasks.map((task) =>
                    task.id === taskId ? { ...task, status: newStatus } : task,
                ),
            );

            const formatStatus = (status) => {
                return status
                    .toLowerCase()
                    .split('_')
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' ');
            };

            toast.success(
                `Task "${currentTask.title}" moved from "${formatStatus(currentStatus)}" to "${formatStatus(newStatus)}"`,
            );
        } else if (newIndex < currentIndex) {
            toast.error("Reverse movement not allowed!");
        }
    };


    const filteredTasks = tasks.filter((task) => {
        const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesTag = selectedTag === 'All Tags' || task.tag === tagMapping[selectedTag];
        return matchesSearch && matchesTag;
    });

    return (
        <div className="pt-24 md:px-6 px-4 pb-5">
            <div className="">
                <h2 className="font-semibold text-3xl text-zinc-800">Board</h2>

                <div className="flex flex-wrap items-center md:gap-4 gap-2 pt-3 w-full">
                    {/* Search Input */}
                    <div className="max-w-sm w-full px-3 rounded-lg flex border items-center">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full py-3"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <IoIosSearch className="text-xl text-zinc-600" />
                    </div>

                    <UserProfiles selectedTag={selectedTag} />

                    {/* Tag Dropdown */}
                    <TagsDropdown selectedTag={selectedTag} onSelect={handleSelectTag} />
                </div>

                {/* Task Columns */}
                <div className="flex pb-3 cards md:flex-row flex-col overflow-x-auto max-w-[98%] w-full gap-3 pt-8">
                    <DndContext onDragEnd={handleDragEnd}>
                        {COLUMNS.map((column, idx) => (
                            <Column
                                key={column.id}
                                column={column}
                                tasks={filteredTasks.filter((task) => task.status === column.id)}
                                idx={idx}
                            />
                        ))}
                    </DndContext>
                </div>
            </div>
        </div>
    );
}

