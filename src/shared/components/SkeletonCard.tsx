import { cn } from "@src/shared/utils/cn"

interface SkeletonCardProps {
  className?: string
}

export function SkeletonCard({ className }: SkeletonCardProps) {
  return (
    <div className={cn("animate-pulse rounded-xl border border-gray-200 bg-white p-4", className)}>
      <div className="mb-3 aspect-square w-full rounded-lg bg-gray-200" />
      <div className="mb-2 h-4 w-3/4 rounded bg-gray-200" />
      <div className="h-3 w-1/2 rounded bg-gray-200" />
    </div>
  )
}
