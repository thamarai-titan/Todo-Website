import Image from "next/image"
import Button from "../components/button"

export default function Header() {
  return (
    <header className="mx-auto max-w-7xl h-[80vh] p-12 flex items-center justify-center">

      <div className="flex flex-col text-center md:text-left justify-center items-center">

        <h1 className="text-3xl md:text-4xl font-semibold mb-4 bg-amber-200 dark:bg-black">
          <span>“Your Productivity, Reinvented.”</span>
        </h1>

        <p className="text-[12px] md:text-[15px] font-light text-gray-600 max-w-md md:max-w-lg mx-auto text-center">
          Take control of your day with clarity, focus, and effortless task management.
        </p>
        <div className="py-6">
          <Button variant="primary">
            Set a Task
          </Button>
        </div>
      </div>
    </header>

  )
}