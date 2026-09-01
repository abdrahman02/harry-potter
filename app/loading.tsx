import { SkeletonCard } from "@src/shared/components/SkeletonCard"

type CardPattern = "0" | "1" | "2" | "3" | "4" | "5"

export default function Loading() {
  return (
    <div className="flex flex-col gap-6">
      {/* Heading placeholder */}
      <div>
        <div className="h-8 w-40 animate-pulse rounded-lg bg-gray-200" />
        <div className="mt-2 h-4 w-24 animate-pulse rounded bg-gray-200" />
      </div>

      {/* Filter/search bar placeholder */}
      <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
        <div className="h-9 w-72 animate-pulse rounded-full bg-gray-200" />
        <div className="h-9 w-48 animate-pulse rounded-lg bg-gray-200" />
      </div>

      {/* Bento grid skeleton — mirrors the 0-5 cycling pattern */}
      <div
        className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4"
        style={{ gridAutoRows: "240px", gridAutoFlow: "dense" }}
      >
        {Array.from({ length: 18 }).map((_, i) => (
          <SkeletonCard key={i} pattern={String(i % 6) as CardPattern} />
        ))}
      </div>
    </div>
  )
}
