"use client"
import Link from "next/link"
import Logo from "../logo"
import { ModeToggle } from "../toggle-button"
import Button from "../components/button"
import { Divide, Menu } from "lucide-react"
import { useState } from "react"
import { logout } from "@/app/lib/actions"


export default function NavBar({isAuth}:{isAuth:boolean}) {

    const [open, setOpen] = useState<boolean>(false);
    console.log(isAuth)
    
    return (
        <nav className="sticky top-0 z-50">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 py-5 sm:px-6 ">
                <div className="text-muted-foreground flex flex-1 items-center gap-8 font-medium md:justify-start lg:gap-16">
                    <Link href={"/"}>
                        <Logo />
                    </Link>

                </div>
                <div className="">
                    <ModeToggle />
                </div>
                <div className="flex items-center justify-betwee lg:gap-10 gap-6 font-medium">
                    {isAuth ? (<div>
                        <Button variant="primary" onClick={()=>logout()}>Logout</Button>
                    </div>) : (
                        <div className="flex items-center justify-betwee lg:gap-10 gap-6 font-medium">
                        <Link href={"/auth/sign-in"}>
                        Sign-In
                        </Link>
                        <Link href={"/auth/sign-up"}>
                        <Button variant="primary" className="hover:bg-zinc-400">Get Started</Button>
                        </Link>
                    </div>
                )}
                </div>
                <div className="md:hidden block" onClick={()=>setOpen(!open)}>
                    <Menu />
                </div>
            </div>
            {open && (
                <div className="top-0 w-full h-screen flex justify-center items-center">
                <div className="h-full rounded-xl py-10">
                    <div className="p-4 px-6">
                        <p className="p-2 text-[13px] font-medium text-zinc-500">Sections</p>

                        <nav className="flex flex-col space-y-2 text-sm">
                            <Link href="/" className="p-2 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800">
                                Index
                            </Link>
                            <Link href="/" className="p-2 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800">
                                Today
                            </Link>
                            <Link href="/" className="p-2 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800">
                                Upcoming
                            </Link>
                            <Link href="/" className="p-2 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800">
                                Completed
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>
            )}
        </nav>
    )
}