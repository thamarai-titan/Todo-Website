import type {NextAuthConfig} from "next-auth";

export const authConfig = {
    pages:{
        signIn: '/login',
    },
    callbacks: {
        authorized({auth,request: {nextUrl}}){
            const isLoggedIn = !!auth?.user;
            const inOnTodo = nextUrl.pathname.startsWith('/todo');
            if(inOnTodo){
                if(isLoggedIn) return true;
                return false;
            }
            else if(isLoggedIn){
                return Response.redirect(new URL('/todo',nextUrl));
            }
            return true;
        },
    },
    providers: [],
    }satisfies NextAuthConfig;

