import SignInForm from "@/app/ui/login/signin-form"
import { FormEvent } from "react"
import { useRouter } from "next/router"

export default function SignInPage(){
    const router = useRouter()
    async function handleSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const email = formData.get("email")
        const password = formData.get("password")

        const response = await fetch('/lib/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
 
    if (response.ok) {
      router.push('/dashboard/inbox')
    } else {
      // Handle errors
      console.log("error on signin")
    }
        
    }
    return(
        <div className="flex items-center justify-center w-full min-h-svh p-6 md:p-10">
            <div>
            <SignInForm onHandleSubmit={handleSubmit}/>
        </div>
        </div>
    )
}