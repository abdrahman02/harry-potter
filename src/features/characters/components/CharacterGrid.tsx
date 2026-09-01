import { SearchX } from "lucide-react"
import type { Character } from "@src/features/characters/types"
import { CharacterCard, type CardPattern } from "./CharacterCard"

interface CharacterGridProps {
  characters: Character[]
}

export function CharacterGrid({ characters }: CharacterGridProps) {
  if (characters.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 py-24 text-center">
        <SearchX size={48} className="text-gray-300" strokeWidth={1.5} />
        <p className="text-lg font-medium text-gray-600">No characters found</p>
        <p className="text-sm text-gray-400">Try a different search or filter</p>
      </div>
    )
  }

  return (
    <div
      className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4"
      style={{ gridAutoRows: "240px", gridAutoFlow: "dense" }}
    >
      {characters.map((character, index) => (
        <CharacterCard
          key={character.id}
          character={character}
          pattern={String(index % 6) as CardPattern}
          priority={index === 0}
        />
      ))}
    </div>
  )
}
