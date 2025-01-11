import { useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import { Column } from '../Components/Column';
import { COLUMNS, INITIAL_TASKS } from '../Data/DATA';

export default function DashBoard() {
  const [tasks, setTasks] = useState(INITIAL_TASKS);

  function handleDragEnd(event) {
    const { active, over } = event;

    if (!over) return;

    const taskId = active.id;
    const newStatus = over.id;

    // Define the order of columns
    const columnOrder = ['TODO', 'IN_PROGRESS', 'DONE'];

    // Find the current status of the task
    const currentTask = tasks.find((task) => task.id === taskId);
    const currentStatus = currentTask?.status;

    // Find the index of current and new statuses
    const currentIndex = columnOrder.indexOf(currentStatus);
    const newIndex = columnOrder.indexOf(newStatus);

    // Allow only step-by-step movement (to the next immediate column)
    if (newIndex === currentIndex + 1) {
      setTasks(() =>
        tasks.map((task) =>
          task.id === taskId
            ? {
                ...task,
                status: newStatus,
              }
            : task,
        ),
      );
    }
  }

  return (
    <div className="p-4 md:pt-10">
      <div className="flex gap-3">
        <DndContext onDragEnd={handleDragEnd}>
          {COLUMNS.map((column) => {
            return (
              <Column
                key={column.id}
                column={column}
                tasks={tasks.filter((task) => task.status === column.id)}
              />
            );
          })}
        </DndContext>
      </div>
    </div>
  );
}
