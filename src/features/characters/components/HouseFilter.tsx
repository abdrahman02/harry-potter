"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useEffect } from "react"
import { HOUSES, HOUSE_NAMES, type HouseName } from "@src/constants/houses"
import { cn } from "@src/shared/utils/cn"

interface HouseFilterProps {
  selectedHouse: string
}
export function HouseFilter({ selectedHouse }: HouseFilterProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    const house = selectedHouse.toLowerCase() as HouseName
    if (HOUSE_NAMES.includes(house)) {
      document.documentElement.dataset.house = house
    } else {
      delete document.documentElement.dataset.house
    }
  }, [selectedHouse])

  function handleSelect(house: HouseName | "") {
    const params = new URLSearchParams(searchParams.toString())
    if (house) {
      params.set("house", HOUSES[house].label)
    } else {
      params.delete("house")
    }
    params.delete("q")
    params.delete("page")
    router.push(`/?${params.toString()}`)
  }

  const activeHouse = selectedHouse.toLowerCase() as HouseName

  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by house">
      <button
        onClick={() => handleSelect("")}
        className={cn(
          "rounded-full px-4 py-1.5 text-sm font-medium transition-all",
          !selectedHouse
            ? "bg-gray-900 text-white"
            : "bg-gray-100 text-gray-600 hover:bg-gray-200",
        )}
      >
        All Houses
      </button>

      {HOUSE_NAMES.map((house) => (
        <button
          key={house}
          onClick={() => handleSelect(house)}
          className={cn(
            "rounded-full px-4 py-1.5 text-sm font-medium transition-all",
            activeHouse === house
              ? "text-white shadow-md"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200",
          )}
          style={
            activeHouse === house
              ? { backgroundColor: HOUSES[house].primary }
              : undefined
          }
        >
          {HOUSES[house].label}
        </button>
      ))}
    </div>
  )
}
