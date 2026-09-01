import { hpFetch } from "@src/lib/hp-api"
import type { Spell } from "@src/features/spells/types"

export async function getSpells(): Promise<Spell[]> {
  return hpFetch<Spell[]>("/api/spells")
}
