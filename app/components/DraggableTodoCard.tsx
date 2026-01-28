'use client'

import { useDraggable } from "@dnd-kit/core";
import DeleteTodoButton from "./DeleteTodoButton";
import type { Todo } from "@/lib/data/todo.schema";
import { useEffect, useState, type Dispatch, type SetStateAction } from "react";

const DraggableTodoCard = ({ todo, columnId, setTodos }: {
    todo: Todo,
    columnId: "completed" | "incomplete",
    setTodos: Dispatch<SetStateAction<{
        id: string;
        title: string;
        completed: boolean;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
    }[]>>
}) => {


    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: todo.id,

    });

    const style = transform
        ? { transform: `translate(${transform.x}px, ${transform.y}px)`, zIndex: 50, }
        : undefined;

    return (
        <div
            ref={setNodeRef}

            style={style}
            className="card w-full max-w-md bg-base-100 shadow-xl border border-base-200   py-3 px-6 relative">
                

            <div className={`absolute right-3 top-3 w-3 h-3 rounded-full ${columnId == "completed" ? "bg-success" : "bg-warning"} `}></div>

            <div
                {...listeners}
                {...attributes}
                className="py-4  cursor-pointer">
                <div

                    className="flex  flex-col justify-between items-start "
                >
                    <div>
                        <h2 className="card-title text-sm lg:text-lg  ">{todo.title}</h2>


                    </div>
                </div>
            </div>
            <DeleteTodoButton todoId={todo.id} setTodos={setTodos} />

        </div>


    );
}

export default DraggableTodoCard