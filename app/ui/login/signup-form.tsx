"use client"
import { SignUp } from "@/app/lib/actions";
import Button from "../components/button"
import { useActionState } from "react";
export default function SignUpForm() {

    const [state,action,pending] = useActionState(SignUp,undefined);

    const labelStyle = "pb-3 text-md font-medium";
    const InputStyle = "rounded border border-zinc-700 py-1 px-2 mb-6";
    return (
        <form action={action} className="border border-zinc-800 flex flex-col rounded-2xl p-6 bg-[#171717] text-white" >
            <h2 className="text-[16px] font-semibold pb-3">Create a Account</h2>
            <p className="text-sm pb-4">Enter your information below to create your account</p>
            <label htmlFor="" className={`${labelStyle}`}>Email</label>
            <input type="text" placeholder="John Doe" className={`${InputStyle}`} name="email"/>
            {state?.errors?.email && <p>{state.errors.email}</p>}
            <label htmlFor="" className={`${labelStyle}`}>Password</label>
            <input type="text" placeholder="" className={`${InputStyle}`} name="password"/>
            {state?.errors?.password && (
        <div>
          <p>Password must:</p>
          <ul>
            {state.errors.password.map((error) => (
              <li key={error}>- {error}</li>
            ))}
          </ul>
        </div>
      )}
            <Button variant="primary" className="my-3" type="submit" disabled={pending}>
                Create Account
            </Button>
        </form>
    )
}