import Link from "next/link"
import { Wand2 } from "lucide-react"
import { NavLinks } from "./NavLinks"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-stretch px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 pr-8 text-base font-bold text-gray-900 transition-opacity hover:opacity-75"
        >
          <Wand2 size={18} className="text-gray-700" />
          <span>HP Explorer</span>
        </Link>
        <NavLinks />
      </nav>
    </header>
  )
}
