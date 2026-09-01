import type { Character } from "@src/features/characters/types"
import { CharacterCard } from "./CharacterCard"

interface CharacterGridProps {
  characters: Character[]
}

export function CharacterGrid({ characters }: CharacterGridProps) {
  if (characters.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 py-24 text-center">
        <span className="text-5xl" aria-hidden="true">
          🔍
        </span>
        <p className="text-lg font-medium text-gray-600">No characters found</p>
        <p className="text-sm text-gray-400">Try a different search or filter</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  )
}
