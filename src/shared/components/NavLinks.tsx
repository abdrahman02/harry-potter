"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Users, Sparkles } from "lucide-react"
import { cn } from "@src/shared/utils/cn"

const LINKS = [
  { href: "/", label: "Characters", Icon: Users },
  { href: "/spells", label: "Spells", Icon: Sparkles },
]

export function NavLinks() {
  const pathname = usePathname()

  return (
    <div className="flex items-stretch gap-1">
      {LINKS.map(({ href, label, Icon }) => {
        const isActive =
          href === "/"
            ? pathname === "/" || pathname.startsWith("/character")
            : pathname.startsWith(href)

        return (
          <Link
            key={href}
            href={href}
            className={cn(
              "flex items-center gap-2 border-b-2 px-3 py-4 text-sm font-semibold transition-colors",
              isActive
                ? "border-gray-900 text-gray-900"
                : "border-transparent text-gray-400 hover:border-gray-300 hover:text-gray-700",
            )}
          >
            <Icon size={16} />
            {label}
          </Link>
        )
      })}
    </div>
  )
}
