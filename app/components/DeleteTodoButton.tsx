'use client'

import React, { useActionState, useEffect, useState, type Dispatch, type SetStateAction } from 'react'

import { deleteTodoAction } from '@/lib/actions/todo.actions'
import toast from 'react-hot-toast'


const DeleteTodoButton = ({ todoId, setTodos }: {
    todoId: string,
    setTodos: Dispatch<SetStateAction<{
        id: string;
        title: string;
        completed: boolean;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
    }[]>>

}) => {

    const [isBusy, setIsBusy] = useState(false);

    const handleDelete = async () => {
        setIsBusy(true);

       
        const result = await deleteTodoAction(todoId);
        setTodos(prev => prev.filter(todo => todo.id !== todoId));




        if (!result.success) {
            toast.error(result.message)  
        }else
            toast.success(result.message)  


        setIsBusy(false);
    };

    return (
        <button
            type='button'
            onClick={handleDelete}
            //   onPointerDown={e => e.stopPropagation()} // prevents starting drag

            className="btn btn-error btn-xs "
            disabled={isBusy}
        >
            Delete
        </button>
    );

}

export default DeleteTodoButton