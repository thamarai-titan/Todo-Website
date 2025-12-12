import Image from "next/image"

export default function Header(){
    return (
        <header className="mx-auto max-w-7xl h-[80vh] p-12 flex flex-col md:flex-row items-center gap-8">
  
  {/* LEFT TEXT AREA */}
  <div className="flex-1 text-center md:text-left">
    
    <h1 className="text-2xl md:text-4xl font-semibold mb-4">
      <span className="bg-amber-200">“Your Productivity, Reinvented.”</span>
    </h1>

    <p className="text-sm md:text-xl font-light text-gray-600 max-w-md md:max-w-lg mx-auto md:mx-0">
      Take control of your day with clarity, focus, and effortless task management.
    </p>

  </div>

  {/* RIGHT IMAGE AREA */}
  <div className="flex-1 flex justify-center md:justify-end">
    <Image
      src="/Checklist.jpg"
      alt="A todo image"
      width={600}
      height={600}
      className="
        h-auto 
        w-full 
        max-w-[450px] 
        min-w-[280px]
      "
    />
  </div>

</header>

    )
}