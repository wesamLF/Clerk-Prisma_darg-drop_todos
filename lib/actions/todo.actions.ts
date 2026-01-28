'use server'

import { revalidatePath } from "next/cache";
import { createTodo, deleteTodoById, updateTodoStatusById } from "../data/todo"
import { auth } from "@clerk/nextjs/server";





export const createTodoAction = async (formData: FormData) => {
    // await delay(1000)
    const { userId } = await auth();
    if (!userId) return { success: false, message: "Unauthorized", data: undefined };
    const title = formData.get("title") as string;
    const completed = formData.get("completed") == "on";


    const result = await createTodo({ title, completed })
    if (!result.success) {
        return { success: false, message: result.message, data: result.data }

    }
    revalidatePath("/todos")
    return { success: true, message: result.message, data: result.data }



}

export const deleteTodoAction = async (id: string) => {
    console.log("delted")
    // await delay(1000)
    const result = await deleteTodoById(id)

    if (!result.success) {
        return { success: false, message: result?.message }
    }
    revalidatePath("/todos")

    return { success: true, message: result?.message }

}


export const UpdateTodoStatusAction = async (id: string, completed: boolean) => {

    const result = await updateTodoStatusById(id, completed)
    if (!result.success) {
        return { success: false, message: result?.message, data: undefined }
    }
    revalidatePath("/todos")

    return { success: true, message: result?.message, data: result.data }

}


