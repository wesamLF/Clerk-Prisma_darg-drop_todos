import { z } from "zod";

export const TodoSchema = z.object({
    id: z.string(),
    title: z.string().min(1),
    completed: z.boolean(),
    createdAt: z.date(),
    updatedAt: z.date(),
    userId: z.string(),

});
export const TestSchema = z.object({
    id: z.string(),
    age: z.string(),
    title: z.string().min(1),
    completed: z.boolean().optional(),
    createdAt: z.date(),
    updatedAt: z.date(),
    userId: z.string(),
});
export const CreateTodoSchema = z.object({
    title: z.string(),
    completed: z.boolean().optional().default(false),
    userId: z.string(),
})
// export const OutputTodoSchema = z.object({
//     id: z.string(),
//     title: z.string(),
//     completed: z.boolean().optional().default(false),
//     createdAt: z.date(),
//     updatedAt: z.date(),
// })
export const TodosListSchema = z.array(TodoSchema);


export type CreateTodoType = z.infer<typeof CreateTodoSchema>;
export type Todo = z.infer<typeof TodoSchema>;
export type TodoList = z.infer<typeof TodosListSchema>;