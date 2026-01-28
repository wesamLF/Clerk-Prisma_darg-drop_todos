
import { getAllTodos } from "@/lib/data/todo";
import Board from "../components/Board";




export default async function Page() {

  const { data } = await getAllTodos()

  return (
    <div className=" pb-4 md:pb-24">
        <Board initialTodos={data} />

    </div>
  );
}




