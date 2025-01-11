import { useDroppable } from '@dnd-kit/core';
import { TaskCard } from './TaskCard';

export function Column({ column, tasks }) {
  const { setNodeRef } = useDroppable({
    id: column.id,
  });

  return (
    <div className="flex w-80 flex-col rounded-lg bg-[#f7f8f9] p-3">
      <h2 className="mb-4 font-medium text-[#69758b]">{column.title}</h2>
      <div ref={setNodeRef} className="flex flex-1 flex-col gap-3">
        {tasks.map((task) => {
          return <TaskCard key={task.id} task={task} />;
        })}
      </div>
    </div>
  );
}
