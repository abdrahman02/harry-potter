export default function Loading() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <div className="h-8 w-24 animate-pulse rounded-lg bg-gray-200" />
        <div className="mt-2 h-4 w-36 animate-pulse rounded bg-gray-200" />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="flex flex-col gap-2 rounded-xl border border-gray-200 bg-white p-4">
            <div className="h-5 w-36 animate-pulse rounded bg-gray-200" />
            <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
            <div className="h-4 w-3/4 animate-pulse rounded bg-gray-200" />
          </div>
        ))}
      </div>
    </div>
  )
}
