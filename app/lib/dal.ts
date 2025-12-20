import 'server-only'
 
import { redirect } from 'next/navigation'
import { cache } from 'react'
import { getSession } from '@/app/lib/session.server'


export const verifySession = cache(async () => {
  
  const session = await getSession();
  
  if (!session?.userId) {
    redirect('/login')
  }
 
  return { isAuth: true, userId: session.userId }
})  

