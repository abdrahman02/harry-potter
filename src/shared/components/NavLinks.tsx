"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@src/shared/utils/cn"

const LINKS = [
  { href: "/", label: "Characters" },
  { href: "/spells", label: "Spells" },
]

export function NavLinks() {
  const pathname = usePathname()

  return (
    <div className="flex items-center gap-1">
      {LINKS.map(({ href, label }) => {
        // Characters is active on "/" or any "/character*" path
        // Spells is active on any "/spells*" path
        const isActive =
          href === "/"
            ? pathname === "/" || pathname.startsWith("/character")
            : pathname.startsWith(href)

        return (
          <Link
            key={href}
            href={href}
            className={cn(
              "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
              isActive
                ? "bg-gray-100 text-gray-900"
                : "text-gray-600 hover:bg-gray-100 hover:text-gray-900",
            )}
          >
            {label}
          </Link>
        )
      })}
    </div>
  )
}
