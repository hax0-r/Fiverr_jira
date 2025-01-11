import { useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import { Column } from '../Components/Column';
import { COLUMNS, INITIAL_TASKS } from '../Data/DATA';
import { IoIosSearch } from 'react-icons/io';

export default function DashBoard() {
    const [tasks, setTasks] = useState(INITIAL_TASKS);
    const [searchQuery, setSearchQuery] = useState(''); 

    function handleDragEnd(event) {
        const { active, over } = event;

        if (!over) return;

        const taskId = active.id;
        const newStatus = over.id;

        const columnOrder = ['TODO', 'IN_PROGRESS', 'DONE'];
        const currentTask = tasks.find((task) => task.id === taskId);
        const currentStatus = currentTask?.status;
        const currentIndex = columnOrder.indexOf(currentStatus);
        const newIndex = columnOrder.indexOf(newStatus);

        if (newIndex === currentIndex + 1) {
            setTasks(() =>
                tasks.map((task) =>
                    task.id === taskId
                        ? { ...task, status: newStatus }
                        : task,
                ),
            );
        }
    }

    const filteredTasks = tasks.filter((task) =>
        task.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="p-4 md:pt-10">
            <h2 className='font-semibold text-3xl text-zinc-800 '>Board</h2>

            <div className="flex items-center gap-4 pt-3 w-full">
                <div className="max-w-sm w-full px-3 rounded-lg flex border items-center">
                    <input
                        type="text"
                        placeholder='Search...'
                        className='w-full py-3'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)} 
                    />
                    <IoIosSearch className='text-xl text-zinc-600' />
                </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-8">
                <DndContext onDragEnd={handleDragEnd}>
                    {COLUMNS.map((column) => (
                        <Column
                            key={column.id}
                            column={column}
                            tasks={filteredTasks.filter((task) => task.status === column.id)}
                        />
                    ))}
                </DndContext>
            </div>
        </div>
    );
}
