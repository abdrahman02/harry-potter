import { Sparkles } from "lucide-react"
import type { Spell } from "@src/features/spells/types"

interface SpellCardProps {
  spell: Spell
}

export function SpellCard({ spell }: SpellCardProps) {
  return (
    <div className="flex flex-col gap-2 rounded-xl border border-gray-200 bg-white p-4 transition-shadow hover:shadow-md">
      <div className="flex items-center gap-2">
        <Sparkles size={15} className="shrink-0 text-gray-400" />
        <h3 className="font-semibold text-gray-900">{spell.name}</h3>
      </div>
      <p className="text-sm leading-relaxed text-gray-600">
        {spell.description || "No description available."}
      </p>
    </div>
  )
}
