import Image from "next/image"
import Link from "next/link"
import type { Character } from "@src/features/characters/types"
import { cn } from "@src/shared/utils/cn"

interface CharacterCardProps {
  character: Character
}

export function CharacterCard({ character }: CharacterCardProps) {
  return (
    <Link
      href={`/character/${character.id}`}
      className={cn(
        "group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white",
        "transition-all duration-200 hover:-translate-y-1 hover:shadow-lg",
        "focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2",
      )}
    >
      {/* Image area — square aspect ratio */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        {character.image ? (
          <Image
            src={character.image}
            alt={character.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center text-5xl text-gray-300"
            aria-hidden="true"
          >
            🧙
          </div>
        )}
      </div>

      {/* Card body */}
      <div className="flex flex-1 flex-col gap-1 p-3">
        <h3 className="line-clamp-1 text-sm font-semibold text-gray-900">
          {character.name}
        </h3>

        {/* House badge — only rendered when house is truthy */}
        {character.house && (
          <span
            className="inline-block w-fit rounded-full px-2 py-0.5 text-xs font-medium"
            style={{
              backgroundColor: "color-mix(in srgb, var(--house-primary) 15%, white)",
              color: "var(--house-primary)",
            }}
          >
            {character.house}
          </span>
        )}

        {/* Species + gender */}
        <p className="text-xs capitalize text-gray-500">
          {[character.species, character.gender].filter(Boolean).join(" · ")}
        </p>
      </div>
    </Link>
  )
}
