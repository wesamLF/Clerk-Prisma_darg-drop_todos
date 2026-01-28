import "server-only"
import { PrismaClient } from "../../app/generated/prisma";
import prisma from "../prisma";
import { CreateTodoSchema, TestSchema, TodoSchema, TodosListSchema, type CreateTodoType, type Todo } from "./todo.schema";
import { error } from "console";
import { delay } from "../delay";
import { auth } from "@clerk/nextjs/server";
import { date } from "zod";





export const createTodo = async (input: { title: string, completed: boolean }) => {
    const { userId } = await auth();
    if (!userId) return { success: false, message: "Unauthorized" };

    try {
        const data = CreateTodoSchema.strict().parse({ title: input.title, completed: input.completed, userId: userId })
        const todo = await prisma.todo.create({ data: { title: data.title, completed: data.completed, userId: data.userId } })

        return { success: true, message: "created todo", data: todo }
    }
    catch (err) {
        console.error("error:", err);
        return { success: false, message: "could not create todo", }

    }




};

export const getAllTodos = async (query?: string | null, completed?: boolean | null) => {
    const { userId } = await auth(); // get the logged-in user
    if (!userId) return { success: false, message: "Unauthorized", data: [] };
    try {
        const todos = await prisma.todo.findMany({
            where: {
                userId,
                ...(query && {
                    title: { contains: query, mode: "insensitive" },
                }),
                ...(completed != null && { completed: completed }),

            }, orderBy: { updatedAt: "desc" },
        });


        if (todos?.length == 0) {
            return { success: true, message: "no todos found", data: [] }
        }
        const result = TodosListSchema.safeParse(todos)
        if (!result.success) {
            return { success: false, message: "bad data", data: [] };
        }
        return { success: true, message: "found successflly", data: result.data }
    } catch (err) {
        console.error("error", err);
        return { success: false, message: "somthing went wrong", data: [] };

    }


};

// export const getAllTodosWithFilters = async (query: string) => {
//     const { userId } = await auth(); // get the logged-in user
//     if (!userId) return { success: false, message: "Unauthorized", data: [] };
//     // await delay(2000)
//     try {
//         const todos = await prisma.todo.findMany({
//             where: { userId },
//             orderBy: { createdAt: "desc" },
//         });
//         if (todos?.length == 0) {
//             return { success: true, message: "no todos found", data: [] }
//         }
//         const result = TodosListSchema.safeParse(todos)
//         if (!result.success) {
//             return { success: false, message: "bad data", data: [] };
//         }
//         return { success: true, message: "found successflly", data: result.data }
//     } catch (err) {
//         console.error("error", err);
//         return { success: false, message: "somthing went wrong", data: [] };

//     }


// };


export const deleteTodoById = async (id: string) => {

    const { userId } = await auth()
    if (!userId) return { success: false, message: "Unauthorized" };

    try {
        await prisma.todo.delete({
            where: { id: id, userId: userId },
        });
        return { success: true, message: "deleted successflly" }
    } catch (err) {
        console.error("error", err);

        return { success: false, message: "could not delete the todo" }
    }

}
export const updateTodoStatusById = async (id: string, completed: boolean) => {

    const { userId } = await auth()
    if (!userId) return { success: false, message: "Unauthorized" };

    try {
        const todo = await prisma.todo.update({
            where: { id: id, userId: userId },
            data: { completed, updatedAt: new Date(), },
        });
        return { success: true, message: "updated successflly", data: todo }
    } catch (err) {
        console.error("error", err);

        return { success: false, message: "could not updated the todo" }
    }

}