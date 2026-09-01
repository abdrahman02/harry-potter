"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import type { Character } from "@src/features/characters/types"
import { CharacterGrid } from "./CharacterGrid"

const INITIAL_COUNT = 20
const LOAD_MORE_STEP = 20

interface CharacterListClientProps {
  characters: Character[]
}

export function CharacterListClient({ characters }: CharacterListClientProps) {
  const [displayCount, setDisplayCount] = useState(INITIAL_COUNT)
  const visible = characters.slice(0, displayCount)
  const remaining = characters.length - displayCount

  return (
    <div className="flex flex-col gap-6">
      <CharacterGrid characters={visible} />

      {remaining > 0 && (
        <div className="flex justify-center">
          <button
            onClick={() => setDisplayCount((prev) => prev + LOAD_MORE_STEP)}
            className="flex items-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-2.5 text-sm font-medium text-gray-700 transition-all hover:border-gray-400 hover:bg-gray-50 hover:shadow-sm"
          >
            <ChevronDown size={16} />
            Load More ({remaining} remaining)
          </button>
        </div>
      )}
    </div>
  )
}
