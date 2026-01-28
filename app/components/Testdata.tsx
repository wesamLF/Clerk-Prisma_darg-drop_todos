import { delay } from '@/lib/delay'
import React from 'react'

const Testdata = async ({ page, query }: { page: number, query: string |null }) => {
    await delay(1000)
    return (
        <div className=" flex gap-7 text-xl">
            {query && 
            <div>query {query}</div>
            }

            <div>Testdata {page}</div>
        </div>
    )
}

export default Testdata