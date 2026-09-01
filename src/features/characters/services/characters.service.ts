import { hpFetch } from "@src/lib/hp-api"
import type { Character } from "@src/features/characters/types"

export async function getCharacters(): Promise<Character[]> {
  return hpFetch<Character[]>("/api/characters")
}

export async function getCharactersByHouse(house: string): Promise<Character[]> {
  return hpFetch<Character[]>(`/api/characters/house/${encodeURIComponent(house)}`)
}

export async function getCharacterById(id: string): Promise<Character> {
  const results = await hpFetch<Character[]>(
    `/api/character/${encodeURIComponent(id)}`,
  )
  const character = results[0]
  if (!character) throw new Error(`Character not found: ${id}`)
  return character
}
