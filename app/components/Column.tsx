'use client'

import type { Todo } from '@/lib/data/todo.schema';
import DraggableTodoCard from './DraggableTodoCard';
import { useDroppable } from '@dnd-kit/core';
import type { Dispatch, SetStateAction } from 'react';


interface ColumnProps {
    id: "incomplete" | "completed";
    title: string;
    todos: Todo[],
    setTodos: Dispatch<SetStateAction<{
        id: string;
        title: string;
        completed: boolean;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
    }[]>>
}

const Column = ({ id, title, todos, setTodos }: ColumnProps) => {
    const { isOver, setNodeRef } = useDroppable({ id });
    return (
        <div ref={setNodeRef} className={`rounded-xl p-4  lg:p-8 shadow-xl ${isOver ? "bg-base-100 ring-2 ring-gray-200" : "bg-base-200" }`}>
            <div className="">
                <h2 className=" mb-4">{title}</h2>

                <div className="grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 min-h-d75">
                    {todos.map(todo => (
                        <DraggableTodoCard key={todo.id} todo={todo} columnId={id} setTodos={setTodos}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Column