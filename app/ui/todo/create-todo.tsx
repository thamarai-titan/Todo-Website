"use client";

import { useActionState, useEffect, useState } from "react";
import { useFormStatus } from "react-dom";
import Button from "../components/button";
import { addTodo } from "@/app/lib/actions";


function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button variant="primary" type="submit" disabled={pending}>
      {pending ? "Creating..." : "Create"}
    </Button>
  );
}

export default function CreateTodo() {
  const [open, setOpen] = useState(false);
  const [state, action, reset] = useActionState(addTodo,undefined);


  useEffect(() => {
    if (state?.success) {
      setOpen(false);
    }
  }, [state]);

  return (
    <div>
      {!open && (
        <Button
          variant="primary"
          onClick={() => {
            setOpen(true);
          }}
        >
          Add Task
        </Button>
      )}

      {open && (
        <form
          action={action}
          className="border border-zinc-400 my-4 rounded flex flex-col md:w-2xl p-2"
        >
          <input
            name="title"
            placeholder="Write your task here..."
            className="mx-2 my-2 focus:outline-none text-sm"
          />

          {state?.errors?.title && (
            <p className="text-sm text-red-400 px-3">
              {state.errors.title[0]}
            </p>
          )}

          <input
            name="description"
            placeholder="Description"
            className="mx-2 my-1 focus:outline-none text-sm"
          />

          <div className="flex justify-end px-3 gap-3 mt-6">
            <Button
              variant="secondary"
              type="button"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>

            <SubmitButton />
          </div>
        </form>
      )}
    </div>
  );
}
