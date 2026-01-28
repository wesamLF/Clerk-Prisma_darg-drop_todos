import type { Todo } from '@/lib/data/todo.schema'
import DeleteTodoButton from './DeleteTodoButton';
import UpdateTodoStatus from './UpdateTodoStatus';
import { delay } from '@/lib/delay';

const TodoCard = async ({ todo }: { todo: Todo }) => {



    return (
        <div className="card w-full max-w-md bg-base-100 shadow-xl border border-base-300">

            <div className="card-body p-6">
                <div className="flex justify-between items-start">
                    <div>
                        {/* Todo Title */}
                        <h2 className="card-title text-lg font-bold">{todo.title}</h2>

                        {/* Updated At Timestamp */}
                        <p className="text-xs text-base-content/60 mt-1">
                            Updated: {new Date(todo.updatedAt).toLocaleDateString()}
                        </p>
                    </div>

                </div>
                {/* <DeleteTodoButton todoId={todo.id}  setIsBusy={setIsBusy} /> */}
            </div>
        </div>
    )
}

export default TodoCard

