import SignInForm from "@/app/ui/login/signin-form"
export default function SignInPage(){
    return(
        <div className="flex items-center justify-center w-full min-h-svh p-6 md:p-10">
            <div>
            <SignInForm/>
        </div>
        </div>
    )
}