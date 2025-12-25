"use client";

import { Todo } from "@/app/generated/prisma/client";
import { deleteTodo } from "@/app/lib/actions";
import { Edit, Trash } from "lucide-react";
import UpdateTodo from "./update-todo";
import { useState } from "react";

type TodoProps = {
  data: Todo[];
};

export default function TodoDisplay({ data }: TodoProps) {
  const [editingTodo, setEditingTodo] = useState<Todo | null>(null);

  return (
    <>
      <div>
        {data.map((todo) => (
          <div
            key={todo.id}
            className="p-4 border border-zinc-600 my-3 rounded md:max-w-2xl max-w-xl flex justify-between"
          >
            <div className="w-64 md:w-96">
              <h1 className="text-lg font-normal">{todo.title}</h1>
              <p className="text-sm text-zinc-600">{todo.description}</p>
            </div>

            <div>
              <button
                className="p-1 text-zinc-500"
                onClick={() => setEditingTodo(todo)} 
              >
                <Edit />
              </button>

              <button
                className="p-1 hover:text-red-400"
                onClick={async () => {
                  await deleteTodo(todo.id);
                }}
              >
                <Trash />
              </button>
            </div>
          </div>
        ))}
      </div>

      {editingTodo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm px-4">
          <UpdateTodo
            todo={editingTodo}
            onClose={() => setEditingTodo(null)}
          />
        </div>
      )}
    </>
  );
}
