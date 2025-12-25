"use client";

import { updateTodo } from "@/app/lib/actions";
import { useActionState, useEffect } from "react";
import Button from "../components/button";
import { useFormStatus } from "react-dom";
import { Todo } from "@/app/generated/prisma/client";
import { TodoState } from "@/app/lib/definitions";

type Props = {
  todo: Todo;
  onClose: () => void;
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button variant="primary" type="submit" disabled={pending}>
      {pending ? "Updating..." : "Update"}
    </Button>
  );
}

export default function UpdateTodo({ todo, onClose }: Props) {
  const [state, action] = useActionState(updateTodo, {});


  useEffect(() => {
    if (state?.success) {
      onClose();
    }
  }, [state, onClose]);

  return (
    <form
      action={action}
      className="bg-white dark:bg-zinc-900 border border-zinc-400 rounded flex flex-col w-full max-w-lg p-4"
    >

      <input type="hidden" name="todoid" value={todo.id} />

      <input
        name="title"
        defaultValue={todo.title ?? ""}
        placeholder="Write your task here..."
        className="mx-2 my-2 focus:outline-none text-sm bg-transparent"
      />

      {state?.errors?.title && (
        <p className="text-sm text-red-400 px-3">
          {state.errors.title[0]}
        </p>
      )}

      <input
        name="description"
        defaultValue={todo.description ?? ""}
        placeholder="Description"
        className="mx-2 my-1 focus:outline-none text-sm bg-transparent"
      />

      <div className="flex justify-end px-3 gap-3 mt-6">
        <Button
          variant="secondary"
          type="button"
          onClick={onClose}
        >
          Cancel
        </Button>

        <SubmitButton />
      </div>
    </form>
  );
}
