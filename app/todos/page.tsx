
import { getAllTodos } from "@/lib/data/todo";
import Board from "../components/Board";




export default async function Page() {

  const { data } = await getAllTodos()

  return (
    <div className="pt-4 pb-10">
        <Board initialTodos={data} />

    </div>
  );
}




