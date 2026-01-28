'use client'


import { DndContext, type DragEndEvent, type DragStartEvent } from "@dnd-kit/core";
import { useEffect, useState } from "react";
import Column from "../components/Column";
import type { Todo } from "@/lib/data/todo.schema";
import { UpdateTodoStatusAction } from "@/lib/actions/todo.actions";
import toast from "react-hot-toast";
import CreateTodoForm from "./CreateTodoForm";


export default function Board({ initialTodos }: { initialTodos: Todo[] }) {
    const [todos, setTodos] = useState<Todo[]>(initialTodos);




    const incomplete = todos
        .filter(t => !t.completed)
        .sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime()); // newest first

    const completed = todos
        .filter(t => t.completed)
        .sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime()); // newest first

    const prevState = todos
    async function handleDragEnd(event: DragEndEvent) {
        const { active, over } = event;
        if (!over) return;
        const draggedTodo = todos.find(t => t.id === active.id);
        const newStatus = over.id === "completed"; // over is the droppable area

        if (draggedTodo?.completed === newStatus) return;

        setTodos(prev => prev.map(todo => todo.id === active.id ?
            {
                ...todo, completed: newStatus, updatedAt: new Date(),

            } : todo));

        const result = await UpdateTodoStatusAction(active.id as string, newStatus)
        if (!result.success || !result.data) {
            setTodos(prevState)
            toast.error(result?.message)
        } else {
            const temp = result.data
            setTodos(prev => prev.map(todo => todo.id === active.id ? temp : todo));

            toast.success(result?.message)

        }



    }

    return (
        <div className=" ">
            <CreateTodoForm setTodos={setTodos} />

            <h1 className="text-3xl font-bold my-8 text-center">Drag & Drop Todo Board</h1>

            <DndContext onDragEnd={handleDragEnd} autoScroll={false}>
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 lg:gap-12 ">
                    <Column id="incomplete" title="Not Completed" todos={incomplete} setTodos={setTodos} />
                    <Column id="completed" title="Completed" todos={completed} setTodos={setTodos} />
                </div>
            </DndContext>
        </div>
    );
}