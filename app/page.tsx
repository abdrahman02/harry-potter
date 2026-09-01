import { Suspense } from "react"
import { getCharacters, getCharactersByHouse } from "@src/features/characters/services/characters.service"
import { CharacterGrid } from "@src/features/characters/components/CharacterGrid"
import { HouseFilter } from "@src/features/characters/components/HouseFilter"
import { CharacterSearch } from "@src/features/characters/components/CharacterSearch"
import { CharactersPagination } from "@src/features/characters/components/CharactersPagination"
import type { Character } from "@src/features/characters/types"

const PAGE_SIZE = 20

interface HomePageProps {
  searchParams: Promise<{ house?: string; q?: string; page?: string }>
}

export default async function HomePage({ searchParams }: HomePageProps) {
  const { house = "", q = "", page = "1" } = await searchParams
  const currentPage = Math.max(1, parseInt(page, 10) || 1)

  const allCharacters: Character[] = house
    ? await getCharactersByHouse(house)
    : await getCharacters()

  const filtered = q
    ? allCharacters.filter((c) => c.name.toLowerCase().includes(q.toLowerCase()))
    : allCharacters

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE)
  const paginated = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)

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

      <CharacterGrid characters={paginated} />

      <Suspense>
        <CharactersPagination currentPage={currentPage} totalPages={totalPages} />
      </Suspense>
    </div>
  )
}
