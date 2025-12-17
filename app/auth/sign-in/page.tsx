import SignInForm from "@/app/ui/login/signin-form"
import { FormEvent } from "react"
import { useRouter } from "next/router"

export default function SignInPage(){
    const router = useRouter()
    async function handleSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault()

        
    }
    return(
        <div className="flex items-center justify-center w-full min-h-svh p-6 md:p-10">
            <div>
            <SignInForm/>
        </div>
        </div>
    )
}