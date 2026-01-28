import React, { Suspense } from 'react'
import TodoCard from './TodoCard'
import { getAllTodos, } from '@/lib/data/todo'
import { delay } from '@/lib/delay'

const TodosList = async ({ query, completed }: { query: string | null, completed: boolean | null }) => {


    const { data, message } = await getAllTodos(query, completed)

    return (
        <div className='max-w-312.5 mx-auto flex flex-wrap gap-4'>

            {data?.length == 0 ? <p className='bg-red-400'>{message}</p> :
                data?.map((todo) => <div
                    key={todo.id}
                    className={`flex-none w-60 transition-all duration-300 ease-in-out transform 
                        }`}
                >

                        <TodoCard todo={todo} />
                </div>)
            }

        </div>
    )
}

export default TodosList