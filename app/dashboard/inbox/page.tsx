"use client";

import { Menu } from "lucide-react";
import Sidebar from "@/app/ui/sidebar"
import Nav from "@/app/ui/home/nav-bar"
import { useState } from "react";

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
                        </div>
                    </div>
                </main>
            </div>
        </div>
       </div>
    )
}