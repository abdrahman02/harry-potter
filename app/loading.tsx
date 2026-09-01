import { SkeletonCard } from "@src/shared/components/SkeletonCard"

export default function Loading() {
  return (
    <div className="flex flex-col gap-6">
      {/* Heading placeholder */}
      <div>
        <div className="h-8 w-40 animate-pulse rounded-lg bg-gray-200" />
        <div className="mt-2 h-4 w-24 animate-pulse rounded bg-gray-200" />
      </div>

      {/* Filter/search bar placeholder */}
      <div className="h-9 w-80 animate-pulse rounded-lg bg-gray-200" />

      {/* Character grid skeleton — 20 cards matching PAGE_SIZE */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {Array.from({ length: 20 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  )
}
