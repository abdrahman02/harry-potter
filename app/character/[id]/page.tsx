import type { Metadata } from "next"
import { getCharacterById } from "@src/features/characters/services/characters.service"
import { CharacterDetail } from "@src/features/characters/components/CharacterDetail"

interface CharacterPageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: CharacterPageProps): Promise<Metadata> {
  const { id } = await params
  try {
    const character = await getCharacterById(id)
    return {
      title: `${character.name} — Harry Potter Explorer`,
      description: `Learn about ${character.name}${character.house ? `, a ${character.house} character` : ""} from Harry Potter.`,
    }
  } catch {
    return { title: "Character — Harry Potter Explorer" }
  }
}

export default async function CharacterPage({ params }: CharacterPageProps) {
  const { id } = await params
  const character = await getCharacterById(id)
  return <CharacterDetail character={character} />
}
