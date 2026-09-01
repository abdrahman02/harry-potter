import type { Spell } from "@src/features/spells/types"
import { SpellCard } from "./SpellCard"

interface SpellListProps {
  spells: Spell[]
}

export function SpellList({ spells }: SpellListProps) {
  if (spells.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 py-24 text-center">
        <span className="text-5xl" aria-hidden="true">📜</span>
        <p className="text-lg font-medium text-gray-600">No spells found</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {spells.map((spell) => (
        <SpellCard key={spell.id} spell={spell} />
      ))}
    </div>
  )
}
