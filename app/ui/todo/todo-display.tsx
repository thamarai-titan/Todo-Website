"use client";
import { Todo } from "@/app/generated/prisma/client";
import { deleteTodo } from "@/app/lib/actions";
import { Edit, Trash } from "lucide-react";

type TodoProps = {
  data: Todo[];
};

export default function TodoDisplay({ data }: TodoProps) {
  return (
    <div>
      {data.map((todo) => (
        <div
          className="p-4 border border-zinc-600 my-3 rounded md:max-w-2xl max-w-xl flex justify-between"
          key={todo.id}
        >
          <div className="w-64 md:w-96 ">
            <h1 className="text-lg font-normal">{todo.title}</h1>
            <p className="text-sm text-zinc-600">{todo.description}</p>
          </div>
          <div className="">
            <button className="p-1 text-zinc-500"
            
            >
              <Edit />
            </button>
            <button className="p-1 hover:text-red-400"
            onClick={async ()=>{
                await deleteTodo(todo.id)
            }}
            >
              <Trash />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
