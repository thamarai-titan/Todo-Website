import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="hidden md:block md:sticky md:top-20 md:h-[calc(100vh-5rem)] md:w-64">
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
    </aside>
  );
}
