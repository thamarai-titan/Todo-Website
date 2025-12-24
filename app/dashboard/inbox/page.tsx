

import Sidebar from "@/app/ui/sidebar"
import CreateTodo from "@/app/ui/todo/create-todo";
import TodoPage from "@/app/ui/todo/todo-client";


export default function TodoHome(){
    return (
       <div className="min-h-screen">
        <div className="mx-auto max-w-7xl">
            <div className="relative flex">
                <Sidebar/>
                <main className="flex-1 p-6">
                    <div>
                        <div className=" md:text-xl font-medium">
                            Start Creating your Todo's here
                            <div className="py-4 md:py-6">
                                <CreateTodo/>
                                <TodoPage/>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
       </div>
    )
}