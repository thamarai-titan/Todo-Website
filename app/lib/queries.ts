import prisma from "./prisma";
import { getUserId } from "./session.server";


export async function getTodos(){
  const userId = await getUserId();
  if (!userId) return [];

  return prisma.todo.findMany({
    where: { user_id: userId },
  });
}
