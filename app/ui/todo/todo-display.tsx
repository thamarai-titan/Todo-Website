"use client"
import { Todo } from "@/app/generated/prisma/client";

type TodoProps = {
 data: Todo[]
}

export default function TodoDisplay({data}:TodoProps){
    return (
        <div>
      {data.map(todo => (
        <div key={todo.id}>{todo.id}</div>
      ))}
    </div>
    )
}