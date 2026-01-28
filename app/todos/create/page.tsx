

import CreateTodoForm from '@/app/components/CreateTodoForm'
import TodoListSkel from '@/app/components/TodoListSkel'
import TodosFilter from '@/app/components/TodosFilter'
import TodosList from '@/app/components/TodosList'
import type { SearchParams } from 'nuqs/server'
import { Suspense } from 'react'
import { searchParamsLoader } from './todos-search-params'
import { Toaster } from 'react-hot-toast'
import { delay } from '@/lib/delay'

const page = async ({ searchParams }: { searchParams: Promise<SearchParams> }) => {
    const { query, completed } = await searchParamsLoader(searchParams)
    console.log("render")
    // await delay(100)
    return (
        <div className="">
            {/* <Suspense key={query + "44" + String(completed)} fallback={<h1>Loding query</h1>}>

                <h1 className='text-3xl'>Query: {query}</h1>
            </Suspense> */}
            <CreateTodoForm />
            <TodosFilter />
            <Suspense fallback={<TodoListSkel />}>

                <TodosList query={query} completed={completed} />
            </Suspense>

        </div>
    )
}

export default page