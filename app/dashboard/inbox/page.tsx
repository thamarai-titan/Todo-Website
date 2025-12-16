"use client";

import { Menu } from "lucide-react";
import Sidebar from "@/app/ui/sidebar"
import Nav from "@/app/ui/home/nav-bar"
import { useState } from "react";
import CreateTodo from "@/app/ui/todo/create-todo";
import TodoDisplay from "@/app/ui/todo/todo-display";

export default function TodoHome(){
    return (
       <div className="min-h-screen">
        <Nav/>
        <div className="mx-auto max-w-7xl">
            <div className="relative flex">
                <Sidebar/>
                <main className="flex-1 p-6">
                    <div>
                        <div className=" md:text-xl font-medium">
                            Start Creating your Todo's here
                            <div className="py-4 md:py-6">
                                <CreateTodo/>
                                <TodoDisplay/>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
       </div>
    )
}