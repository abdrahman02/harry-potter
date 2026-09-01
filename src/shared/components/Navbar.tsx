import Link from "next/link"
import { NavLinks } from "./NavLinks"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-bold text-gray-900 transition-opacity hover:opacity-80"
        >
          <span aria-hidden="true">🧙‍♂️</span>
          <span>HP Explorer</span>
        </Link>
        <NavLinks />
      </nav>
    </header>
  )
}
