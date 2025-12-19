import NavBar from "../components/navBar";
import { getSession } from "@/app/lib/session.server";

export default async function Nav() {
    const session = await getSession()
    return <NavBar isAuth={!!session}/>
                
}