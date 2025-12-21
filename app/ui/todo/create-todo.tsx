"use client";
import { useActionState, useState } from "react";
import Button from "../components/button"
import { addTodo } from "@/app/lib/actions";



export default function CreateTodo() {
    const [open,SetOpen] = useState<boolean>(true);
    const [state,action,pending] = useActionState(addTodo, undefined)
    return (
        <div className="">
            {open ? (<div className="" onClick={()=>(SetOpen(!open))}>
                <Button variant="primary">Add Task</Button>
                {state && <p>added</p>}
            </div>):(<form action={action} className="border border-zinc-400 h-38 my-4 rounded flex flex-col md:w-2xl">
                <input type="text" className="mx-2 my-2 text-[15px] appearance-none focus:outline-none " placeholder="Write your task here .." name="title"/>
                <input type="text" className="mx-2 my-1 text-[13px] appearance-none focus:outline-none " placeholder="Description" name="description"/>
                <div className="flex justify-end px-3 gap-3 mt-10">
                    <Button variant="secondary" onClick={()=>{
                        SetOpen(!open)}
                        } type="submit">Cancel</Button>
                    <Button variant="primary" type="submit" disabled={pending}>Create</Button>
                </div>
            </form>)}
            
            

        </div>
    )
}