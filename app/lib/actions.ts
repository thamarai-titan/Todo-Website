"use server"
import prisma from "./prisma";
import bcrypt from "bcryptjs";
import {v4} from "uuid";
import { FormState, SignupFormSchema, TodoState } from "./definitions";
import { createSession, getUserId } from '@/app/lib/session.server'
import { redirect } from "next/navigation";
import { deleteSession } from '@/app/lib/session.server'
import { revalidatePath } from "next/cache";
import { todo } from "node:test";




export async function SignUp(state:FormState, formData: FormData){

    const validatedFields = SignupFormSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  })

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


export async function SignIn(state:FormState, formData: FormData){
  const validatedFields = SignupFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password")
  })

  if(!validatedFields.success){
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  const {email,password} = validatedFields.data

  try {
    const user = await prisma.user.findUnique({
      where:{
        email:email,
      }
    })
  
    if(!user){
      return {error: "user not found"}
    }
    const db_password = user.hashed_password
    const isValidPass = await bcrypt.compare(password,db_password)

    if(!isValidPass){
      return {error: "the password is incorrect"}
    }
    await createSession(user.id)
    

  } catch (error) {
    console.log(error)
  }

  
  redirect('/dashboard/inbox')


}
 
export async function logout() {
  await deleteSession()
  redirect('/')
}

export async function addTodo(state:TodoState,formData: FormData){
    const userId = await getUserId()

    if(!userId) {
      return { error: "User cannot exsist" }
    }

    const title = formData.get("title")?.toString().trim()
    const description = formData.get("description")?.toString().trim()

    if(!title){
      return {
        errors:{
        title: ["title required"]
      }
    }
    }

    await prisma.todo.create({
      data: {
        title,
        description,
        user_id: userId,
        completed: false
      }
    });

    revalidatePath("/dashboard/inbox");

    return {success:true}
}

export async function deleteTodo(todoId: number) {
  const userId = await getUserId();
  if(!userId) throw Error("Unauthorized")

  await prisma.todo.delete({
    where:{
      id:todoId,
      user_id:userId
    }
  })

  revalidatePath('/dashboard/index')
}

export async function updateTodo(prevState:any,formData: FormData ): Promise<TodoState>{
  const userId = await getUserId();
  if(!userId) throw Error("Unauthorized")

  const todoId = formData.get("todoid")
  const title = formData.get("title") as string
  const description = formData.get("description") as string

  await prisma.todo.update({
    where:{
      id:Number(todoId),
      user_id:userId
    },
    data:{
      title,
      description
    }
  })

  revalidatePath("/dashboard/index")
   return { success: true }; 
  
}

