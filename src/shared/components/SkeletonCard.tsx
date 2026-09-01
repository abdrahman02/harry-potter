import { cn } from "@src/shared/utils/cn"

type CardPattern = "0" | "1" | "2" | "3" | "4" | "5"

const CARD_SPAN: Record<CardPattern, string> = {
  "0": "col-span-1 row-span-2 md:col-span-2",
  "1": "col-span-1 row-span-1",
  "2": "col-span-1 row-span-1",
  "3": "col-span-1 row-span-1 md:col-span-2",
  "4": "col-span-1 row-span-2",
  "5": "col-span-1 row-span-1",
}

interface SkeletonCardProps {
  pattern?: CardPattern
}

export function SkeletonCard({ pattern = "1" }: SkeletonCardProps) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-2xl bg-gray-200",
        CARD_SPAN[pattern],
      )}
    />
  )
}
