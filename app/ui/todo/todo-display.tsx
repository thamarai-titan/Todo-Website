
import { CircleCheckBig, SquarePen, Trash } from "lucide-react"
import { DisplayTodo } from "@/app/lib/actions"
import { useEffect } from "react"
import { Cossette_Texte } from "next/font/google"
export default function TodoDisplay(){
    useEffect(()=>{
        const data = DisplayTodo()
    },[])
    console.log(data)
    return (
        <div>
            <div className="py-4">
                
                <div className="flex justify-between items-center p-2">
                    <div>
                        <button><CircleCheckBig/></button>
                        <h2 className="text-md font-medium py-2">Go to gym</h2>
                        <p className="text-sm font-light px-1 pb-2">Discription</p>
                    </div>
                    <div className="mr-10 space-x-4 flex items-center"> 
                        <SquarePen className="text-zinc-400"/>
                        <Trash className="text-red-600"/>
                    </div>

                </div>
                <hr className="border-gray-300"/>
            </div>
        </div>
    )
}