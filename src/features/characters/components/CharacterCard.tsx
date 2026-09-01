import Image from "next/image"
import Link from "next/link"
import { ArrowRight, User } from "lucide-react"
import type { Character } from "@src/features/characters/types"
import { cn } from "@src/shared/utils/cn"

export type CardPattern = "0" | "1" | "2" | "3" | "4" | "5"

const CARD_SPAN: Record<CardPattern, string> = {
  "0": "col-span-1 row-span-2 md:col-span-2", // 2×2 featured
  "1": "col-span-1 row-span-1",                // 1×1 small
  "2": "col-span-1 row-span-1",                // 1×1 small
  "3": "col-span-1 row-span-1 md:col-span-2",  // 2×1 wide
  "4": "col-span-1 row-span-2",                // 1×2 tall
  "5": "col-span-1 row-span-1",                // 1×1 small
}

const TITLE_SIZE: Record<CardPattern, string> = {
  "0": "text-xl md:text-2xl lg:text-3xl",
  "1": "text-sm md:text-base",
  "2": "text-sm md:text-base",
  "3": "text-lg md:text-xl",
  "4": "text-sm md:text-base",
  "5": "text-sm md:text-base",
}

function resolveImageSizes(pattern: CardPattern): string {
  const isWide = pattern === "0" || pattern === "3"
  return isWide
    ? "(max-width: 767px) 100vw, (max-width: 1023px) 67vw, 50vw"
    : "(max-width: 767px) 100vw, (max-width: 1023px) 33vw, 25vw"
}

interface CharacterCardProps {
  character: Character
  pattern?: CardPattern
  priority?: boolean
}

export function CharacterCard({ character, pattern = "1", priority = false }: CharacterCardProps) {
  const isFeatured = pattern === "0"
  const isWide = pattern === "0" || pattern === "3"

  const subInfo = [
    character.species,
    character.gender,
    character.actor ? `Played by ${character.actor}` : null,
  ]
    .filter(Boolean)
    .join(" · ")

  return (
    <article
      className={cn(
        "group/card relative overflow-hidden rounded-2xl border border-black/5 bg-gray-100",
        "shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl",
        "focus-within:ring-2 focus-within:ring-gray-900 focus-within:ring-offset-2",
        CARD_SPAN[pattern],
      )}
    >
      {/* Full-bleed background image */}
      {character.image ? (
        <Image
          src={character.image}
          alt={character.name}
          fill
          className="object-cover object-top transition-transform duration-700 ease-out group-hover/card:scale-105"
          sizes={resolveImageSizes(pattern)}
          priority={priority}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <User
            size={isFeatured ? 80 : 48}
            strokeWidth={1}
            className="text-gray-300"
          />
        </div>
      )}

      {/* Gradient overlay — always visible, darkens on hover */}
      <div
        className={cn(
          "absolute inset-0 flex flex-col justify-end p-4 md:p-5",
          "bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent",
          "transition-colors duration-300 ease-out",
          "group-hover/card:from-slate-950/95 group-hover/card:via-slate-950/45",
        )}
      >
        {/* Full-card link sits in the overlay */}
        <Link
          href={`/character/${character.id}`}
          className="absolute inset-0 z-10"
          aria-label={`View ${character.name}`}
        />

        {/* House badge */}
        {character.house && (
          <span
            className="relative z-20 mb-2 w-fit rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white"
            style={{ backgroundColor: "var(--house-primary)" }}
          >
            {character.house}
          </span>
        )}

        {/* Character name */}
        <h3
          className={cn(
            "relative z-20 mb-1 font-bold leading-tight text-white drop-shadow-lg",
            "line-clamp-2 transition-colors duration-300",
            TITLE_SIZE[pattern],
          )}
        >
          {character.name}
        </h3>

        {/* Sub-info (species · gender · actor) — slides up on hover */}
        {subInfo && (
          <p
            className={cn(
              "relative z-20 max-h-0 overflow-hidden capitalize text-gray-300 opacity-0",
              "transition-all duration-500 ease-out",
              "group-hover/card:mb-1 group-hover/card:max-h-16 group-hover/card:opacity-100",
              isWide ? "text-sm" : "text-xs",
            )}
          >
            {subInfo}
          </p>
        )}

        {/* "View Character" arrow — featured card only, on hover */}
        {isFeatured && (
          <div
            className="relative z-20 flex items-center gap-1.5 text-sm font-semibold text-white opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
          >
            View Character <ArrowRight size={14} />
          </div>
        )}
      </div>
    </article>
  )
}
