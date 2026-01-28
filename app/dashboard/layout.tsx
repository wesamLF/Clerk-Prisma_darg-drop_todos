import { ClerkProvider } from '@clerk/nextjs'
import React from 'react'

const layout = ({children}:{children: React.ReactNode}) => {
    return (
        <div className=' bg-red-400 '>
            {children}

        </div>
    )
}

export default layout