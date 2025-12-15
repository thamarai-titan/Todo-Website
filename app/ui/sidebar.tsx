import Button from "./components/button"
export default function Sidebar(){
    return (
        <div className="main-bar left-0 w-64 fixed h-screen transition-transform z-40">
            <div className="h-full w-64 border">
                <div className=" flex justify-center items-center p-4">
                    <Button variant="primary" className="w-full">
                        Add Todo
                    </Button>
                </div>
                <div className="p-4 flex justify-center items-center">
                    <ul className="">
                        <li>Index</li>
                        <li>Today</li>
                        <li>UpComing</li>
                        <li>Completed</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}