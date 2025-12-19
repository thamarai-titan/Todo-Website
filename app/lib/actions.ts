"use server"
import prisma from "./prisma";
import bcrypt from "bcryptjs";
import {v4} from "uuid";
import { FormState, SignupFormSchema } from "./definitions";
import { createSession } from '@/app/lib/session.server'
import { redirect } from "next/navigation";

import { deleteSession } from '@/app/lib/session.server'


export async function SignUp(state:FormState, formData: FormData){

    const validatedFields = SignupFormSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  })
  console.log(validatedFields);
    if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

    const {email,password} = validatedFields.data
    const hashed_password = await bcrypt.hash(password,10)
    const id = v4()
;
    try {
        await prisma.user.create({
            data: {
                id:id,
                email,
                hashed_password:hashed_password
            }
        })
        
    } catch (error) {
        console.log(error)
    }
    
    await createSession(id)
  // 5. Redirect user
    redirect('/dashboard/inbox')
}

 
export async function logout() {
  await deleteSession()
  redirect('/')
}