import { Suspense } from "react"
import { getCharacters, getCharactersByHouse } from "@src/features/characters/services/characters.service"
import { CharacterListClient } from "@src/features/characters/components/CharacterListClient"
import { HouseFilter } from "@src/features/characters/components/HouseFilter"
import { CharacterSearch } from "@src/features/characters/components/CharacterSearch"
import type { Character } from "@src/features/characters/types"

interface HomePageProps {
  searchParams: Promise<{ house?: string; q?: string }>
}

export default async function HomePage({ searchParams }: HomePageProps) {
  const { house = "", q = "" } = await searchParams

  const allCharacters: Character[] = house
    ? await getCharactersByHouse(house)
    : await getCharacters()

  const filtered = q
    ? allCharacters.filter((c) => c.name.toLowerCase().includes(q.toLowerCase()))
    : allCharacters

  return (
    <div className="animate-fade-in flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Characters</h1>
        <p className="mt-1 text-sm text-gray-500">
          {filtered.length} character{filtered.length !== 1 ? "s" : ""} found
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Suspense>
          <HouseFilter selectedHouse={house} />
        </Suspense>
        <Suspense>
          <CharacterSearch defaultValue={q} />
        </Suspense>
      </div>

      <CharacterListClient key={`${house}-${q}`} characters={filtered} />
    </div>
  )
}
