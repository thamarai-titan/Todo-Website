"use client";
import { useState } from "react";
import Button from "../components/button"
import { X } from "lucide-react";


export default function CreateTodo() {
    const [open,SetOpen] = useState<boolean>(true);
    return (
        <div className="">
            {open ? (<div className="" onClick={()=>(SetOpen(!open))}>
                <Button variant="primary">Add Task</Button>
            </div>):(<div className="border border-zinc-400 h-38 my-4 rounded flex flex-col md:w-2xl">
                <input type="text" className="mx-2 my-2 text-[15px] appearance-none focus:outline-none " placeholder="Write your task here .."/>
                <input type="text" className="mx-2 my-1 text-[13px] appearance-none focus:outline-none " placeholder="Description"/>
                <div className="flex justify-end px-3 gap-3 mt-10">
                    <Button variant="secondary" onClick={()=>SetOpen(!open)}>Cancel</Button>
                    <Button variant="primary" onClick={()=>SetOpen(!open)}>Create</Button>
                </div>
            </div>)}
            
            

        </div>
    )
}