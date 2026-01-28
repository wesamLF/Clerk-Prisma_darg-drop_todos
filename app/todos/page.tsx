
import { getAllTodos } from "@/lib/data/todo";
import Board from "../components/Board";
import CreateTodoForm from "../components/CreateTodoForm";
import { Suspense } from "react";
import { delay } from "@/lib/delay";



export default async function Page() {

  const { data } = await getAllTodos()

  return (
    <div className="py-4">
        <Board initialTodos={data} />

    </div>
  );
}




