import { useDroppable } from '@dnd-kit/core';
import { TaskCard } from './TaskCard';
import { FiPlus } from 'react-icons/fi';

export function Column({ column, tasks, idx }) {
  const { setNodeRef } = useDroppable({
    id: column.id,
  });

  const taskCount = tasks.filter((task) => task.status === column.id).length;

  return (
    <div className="flex  !w-80 flex-col rounded-lg bg-[#f7f8f9] p-3">
      <div className="flex w-full mb-4 items-center justify-between">
        <h2 className=" font-medium text-[#69758b]">{column.title} <span className='text-xs text-zinc-400'> ({taskCount})</span></h2>
        {
          idx === 0 && (
            <FiPlus className='text-zinc-400  transition-all duration-500 hover:text-black cursor-pointer text-xl' />
          )
        }
      </div>
      <div ref={setNodeRef} className="flex w-full flex-col gap-3">
        {tasks.map((task) => {
          return <TaskCard key={task.id} task={task} />;
        })}
      </div>
    </div>
  );
}
