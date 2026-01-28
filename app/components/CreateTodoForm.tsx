'use client'

import { createTodoAction } from '@/lib/actions/todo.actions'
import type { Todo } from '@/lib/data/todo.schema';
import { useActionState, useEffect, useState, useTransition, type Dispatch, type SetStateAction } from 'react';
import toast from 'react-hot-toast';

const CreateTodoForm = ({ setTodos }: {
    setTodos: Dispatch<SetStateAction<{
        id: string;
        title: string;
        completed: boolean;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
    }[]>>
}) => {


    const [isPending, startTransition] = useTransition();

    async function handleSubmit(formData: FormData) {


        startTransition(async () => {
            const res = await createTodoAction(formData);


            if (!res.success || !res.data) {
                toast.error(res.message);
                return
            }

            const todo = res.data
            setTodos(prev => [...prev, todo])
            toast.success(res.message);
        });




    }

    return (
        <div className="max-w-md mx-auto mt-10">
            <form action={handleSubmit} className="card bg-base-100 shadow-base-200 shadow-xl p-6 space-y-4">
                <h2 className="text-xl font-semibold">Create Todo</h2>

                {/* Title */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text me-4">Title </span>
                    </label>
                    <input
                        name="title"
                        type="text"
                        placeholder="Enter todo title"
                        className="input input-bordered"
                        required
                    />
                </div>

                {/* Completed (Optional) */}
                <div className="form-control">
                    <label className="cursor-pointer label justify-start gap-3">
                        <input
                            name="completed"
                            type="checkbox"
                            className="checkbox checkbox-primary"
                        />
                        <span className="label-text">Completed</span>
                    </label>
                </div>
                {/* <div className="">
                    {state.success ? <p className='bg-success'>{state.message}</p> : <p className=' bg-warning'>{state.message}</p>}
                </div> */}
                {/* Submit */}
                <button type="submit" disabled={isPending} className="btn btn-primary w-full">
                    {isPending ? "Adding" : "Add Todo"}
                </button>
            </form>
        </div>
    )
}

export default CreateTodoForm