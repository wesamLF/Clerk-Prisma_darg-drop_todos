'use client'

import { UpdateTodoStatusAction } from '@/lib/actions/todo.actions';
import React, { useActionState, useEffect, type Dispatch, type SetStateAction } from 'react'
import toast from 'react-hot-toast';

const UpdateTodoStatus = ({ todoId, completed, isBusy, setIsBusy }: { todoId: string, completed: boolean, isBusy: boolean, setIsBusy: Dispatch<SetStateAction<boolean>> }) => {

    const [state, updateStatusFormAction, isPending] = useActionState(UpdateTodoStatusAction, { success: false, message: "" });


    

    useEffect(() => {
        setIsBusy(isPending)
    }, [isPending])
    useEffect(() => {
        if (state.message != "") {
            if (state.success) {
                toast.success(state.message)
            } else {
                toast.error(state.message)

            }
        }
    }, [state.message, state.success])

    return (
        <form action={updateStatusFormAction} className="form-control w-full max-w-xs relative ">

            <input type="hidden" name="id" value={todoId} />

            <select
                disabled={isBusy}
                name="completed"
                className={`select select-sm select-bordered font-semibold 
                    ${completed ? 'select-success' : 'select-warning'
                    }`}
                value={completed ? "true" : "false"}
                onChange={(e) => e.currentTarget.form?.requestSubmit()}
            >
                {isPending ?
                    <option>Loading...</option>
                    :
                    <>
                        <option value="true" >Completed</option>
                        <option value="false">Pending</option>
                    </>


                }
            </select>
        </form>
    )
}

export default UpdateTodoStatus