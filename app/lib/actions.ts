"use server";

import prisma from "./prisma";
import bcrypt from "bcryptjs";
import {v4} from "uuid";


export async function SignUp(formData: FormData){
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const id = v4()
;
    try {
        await prisma.user.create({
            data: {
                id:id,
                email,
                hashed_password:password
            }
        })
    } catch (error) {
        console.log(error)
    }
    
}
