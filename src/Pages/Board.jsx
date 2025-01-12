import { useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import { Column } from '../Components/Column';
import { COLUMNS, INITIAL_TASKS } from '../Data/DATA';
import { IoIosSearch } from 'react-icons/io';
import { FaSortDown } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';

export default function Board() {
    const { state } = useLocation();
    const role = state?.role || 'user'; // Default to 'user' if no role is provided


    const [tasks, setTasks] = useState(INITIAL_TASKS);
    const [searchQuery, setSearchQuery] = useState('');
    const [selected, setSelected] = useState('All Tags');
    const [isOpen, setIsOpen] = useState(false);

    const options = ['All Tags', 'Tag 1', 'Tag 2', 'Tag 3', 'Tag 4'];
    const tagMapping = {
        'Tag 1': 1,
        'Tag 2': 2,
        'Tag 3': 3,
        'Tag 4': 4,
    };

    const handleSelect = (option) => {
        setSelected(option);
        setIsOpen(false);
    };

    const handleDragEnd = (event) => {
        if (role !== 'admin') {
            toast.error('Only admins can move tasks!');
            return;
        }

        const { active, over } = event;

        if (!over) return;

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
        }
    };

    const filteredTasks = tasks.filter((task) => {
        const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesTag = selected === 'All Tags' || task.tag === tagMapping[selected];
        return matchesSearch && matchesTag;
    });

    return (
        <div className="">
            <div className="px-3">
                <h2 className="font-semibold text-3xl text-zinc-800">Board</h2>

                <div className="flex items-center md:gap-4 gap-2 pt-3 w-full">
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

                    <section className="select-none md:block hidden">
                        <div className=" flex min-h-16 px-4 py-2">
                            <span className="rounded-full  bg-red-400 h-8 w-8 sm:h-14 sm:w-14 p-2 flex justify-center items-center border">
                                MA
                            </span>
                            <span className="rounded-full -ml-4 z-20 bg-green-400 h-8 w-8 sm:h-14 sm:w-14 p-2 flex justify-center items-center border">
                                GA
                            </span>
                            <span className="rounded-full  -ml-4 z-20 bg-gray-200  h-8 w-8 sm:h-14 sm:w-14 p-2 flex justify-center items-center border">
                                CD
                            </span>
                            <span className="rounded-full  -ml-4 z-20 bg-blue-400  h-8 w-8 sm:h-14 sm:w-14 flex justify-center items-center border">
                                CD
                            </span>
                            {/* <span className="rounded-full  -ml-4 z-20 bg-green-800 h-8 w-8 sm:h-14 sm:w-14  flex justify-center items-center border">
                            <img
                                className="w-full h-full rounded-full"
                                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHx1c2VyfGVufDB8MHx8fDE2OTk0NjA4OTV8MA&ixlib=rb-4.0.3&q=80&w=1080"
                            />
                        </span> */}
                            <span className="rounded-full  -ml-4 z-20 bg-zinc-100  h-8 w-8 sm:h-14 sm:w-14 flex justify-center items-center border">
                                11+
                            </span>
                        </div>
                    </section>

                    {/* Tag Dropdown */}
                    <div className="relative inline-block w-32">
                        <div
                            className="p-3 rounded-lg flex justify-between text-nowrap items-center border bg-white cursor-pointer"
                            onClick={() => setIsOpen((prev) => !prev)}
                        >
                            {selected}
                            <div className="pb-2">
                                <FaSortDown className="text-gray-500" />
                            </div>
                        </div>

                        {isOpen && (
                            <ul className="absolute fadeIn bg-white border rounded-lg w-full mt-1 shadow-md">
                                {options.map((option, index) => (
                                    <li
                                        key={index}
                                        className="px-3 text-nowrap py-2 transition-all duration-500 hover:bg-gray-100 cursor-pointer"
                                        onClick={() => handleSelect(option)}
                                    >
                                        {option}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>

                {/* Task Columns */}
                <div className="flex flex-wrap gap-3 pt-8">
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
