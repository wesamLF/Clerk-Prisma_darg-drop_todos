'use client'

import { parseAsInteger, parseAsString, useQueryState ,debounce} from 'nuqs'
import { useTransition } from 'react'



const Pages = () => {

    //usetransition
      const [isPending, startTransition] = useTransition()

    const [page, setPage] = useQueryState('page', parseAsInteger.withDefault(1).withOptions({ shallow: false,startTransition }))
    const [query, setQuery] = useQueryState("query", parseAsString.withOptions({ shallow: false, }))

    return (
        <div>

            <input
                className='bg-gray-800 border-white border m-10 p-2'
                value={query ?? ''}
                onChange={(e) => {
                    setQuery(e.target.value || null, {
                        limitUrlUpdates: e.target.value === '' ? undefined : debounce(1000)
                    })

                }}
            />
            {isPending && "loading pages"}
            <button className='text-black' onClick={() => {
                setPage(p => p + 1)
            }}>
                next Page: {page}
            </button>
            <button className='text-red-700' onClick={() => setPage(null)}>
                clear: {page}
            </button>
        </div>
    )
}

export default Pages