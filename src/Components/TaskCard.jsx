import { useDraggable } from '@dnd-kit/core';
import { RiErrorWarningLine } from 'react-icons/ri';

export function TaskCard({ task }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id,
  });

  const style = transform
    ? {
      transform: `translate(${transform.x}px, ${transform.y}px)`,
    }
    : undefined;

  return (

    <>
    {
      task ? (

        <div
        ref={setNodeRef}
        {...listeners}
        {...attributes}
        className="cursor-grab rounded-lg bg-white p-4 shadow-sm hover:shadow-md"
        style={style}
      >
        <h3 className="font-medium text-[#172b4d]">{task.title}</h3>
        <p className="mt-1 text-sm text-[#626f86]-400 text-zinc-600" >{task.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex w-full mt-5 justify-between">
            <span className='text-xs text-zinc-500'>Tag {task.tag}</span>
            <RiErrorWarningLine className={`text-red-600`} />
          </div>
        </div>
      </div>
      ):"Empty"
    }
    </>
  );
}
