import { getTodos } from "@/app/lib/queries"
import TodoDisplay from "./todo-display"



export default async function TodoPage(){

    const data = await getTodos();

    return <TodoDisplay data={data}/>
}