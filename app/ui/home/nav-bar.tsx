import Link from "next/link"
import Logo from "../logo"
import {ModeToggle} from "../toggle-button"
import Button from "../components/button"
export default function Nav(){
    return (
        <nav className="sticky top-0 z-50">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 py-7 sm:px-6 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                <div className="text-muted-foreground flex flex-1 items-center gap-8 font-medium md:justify-start lg:gap-16">
                    <Link href={"/"}>
                        <Logo/>
                    </Link>
                    
                </div>
                <div className="">
                    <ModeToggle/>
                </div>
                <div className="flex items-center justify-betwee lg:gap-10 gap-6 font-medium">
                    <Link href={"/sign-in"}>
                        Sign-In
                    </Link>
                    <Link href={"/sign-up"}>
                    <Button variant="primary" className="border-gray-600 hover:bg-gray-200">Get Started</Button>
                    </Link>
                </div>
                
            </div>
        </nav>
    )
}