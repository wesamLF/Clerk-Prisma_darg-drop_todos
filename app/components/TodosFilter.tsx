'use client'
import { debounce, parseAsBoolean, parseAsStringEnum, type SearchParams } from 'nuqs/server'
import { searchParamsLoader } from '../todos/create/todos-search-params'
import { parseAsString, useQueryState } from 'nuqs'
import { useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'




const TodosFilter = () => {

    const [isPending, startTransition] = useTransition()

    const [query, setQuery] = useQueryState("query", parseAsString.withOptions({ shallow: false, startTransition }))
    const [completed, setCompleted] = useQueryState(
        "completed",
        parseAsBoolean.withOptions({ shallow: false, })
    );

    const [input, setInput] = useState(query ?? "")
    const [select, setSelect] = useState("")
  const router = useRouter()

    const handleSubmit = (e: React.FormEvent) => {

        e.preventDefault()
        const status =
            select === "true" ? true :
                select === "false" ? false :
                    null;
        setQuery(input || null)
        setCompleted(status)
        router.refresh()
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="flex w-full flex-col justify-end sm:flex-row gap-3 items-center mb-8 mt-4"
        >
            {/* Search input */}
            <input
                type="text"
                placeholder="Search todos..."
                className="input input-bordered w-full sm:w-64"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />

            {/* Status select */}
            <select
                className="select select-bordered w-full sm:w-40"
                value={select}
                onChange={(e) => setSelect(e.target.value)}
            >
                <option value="">All</option>
                <option value="true">Completed</option>
                <option value="false">Pending</option>
            </select>

            {/* Search button */}
            {isPending && "loading"}
            <button type="submit" className="btn btn-primary w-full sm:w-auto">
                Search
            </button>
        </form>
    )
}

export default TodosFilter

function parseAsEnum(arg0: string[]) {
    throw new Error('Function not implemented.')
}
