import type { Metadata } from "next"
import { getSpells } from "@src/features/spells/services/spells.service"
import { SpellList } from "@src/features/spells/components/SpellList"

export const metadata: Metadata = {
  title: "Spells — Harry Potter Explorer",
  description: "Browse all spells and incantations from the wizarding world.",
}

export default async function SpellsPage() {
  const spells = await getSpells()
  const sorted = [...spells].sort((a, b) => a.name.localeCompare(b.name))

  return (
    <div className="animate-fade-in flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Spells</h1>
        <p className="mt-1 text-sm text-gray-500">
          {sorted.length} spell{sorted.length !== 1 ? "s" : ""} in the wizarding world
        </p>
      </div>
      <SpellList spells={sorted} />
    </div>
  )
}
