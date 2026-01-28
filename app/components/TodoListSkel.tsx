import React from 'react'

const TodoListSkel = () => {
    return (
        <div className='max-w-[1250px] mx-auto grid grid-cols-4 gap-4'>

          
                {/* Create an array of 4 items just to map over them */}
                {[1, 2, 3, 4,5,6,7,8].map((i) => (
                    <div key={i} className="card  bg-base-200 h-38 animate-pulse">
                        <div className="card-body">
                            <div className="h-4 bg-base-300 rounded w-3/4"></div>
                            <div className="h-3 bg-base-300 rounded w-1/4 mt-2"></div>
                        </div>
                    </div>
                ))}
            

        </div>
    )
}

export default TodoListSkel