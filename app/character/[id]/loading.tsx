export default function Loading() {
  return (
    <div className="flex flex-col gap-8">
      {/* Back link placeholder */}
      <div className="h-5 w-40 animate-pulse rounded bg-gray-200" />

      <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
        {/* Image placeholder */}
        <div className="mx-auto h-48 w-48 flex-shrink-0 animate-pulse rounded-2xl bg-gray-200 sm:mx-0 sm:h-64 sm:w-64" />

        <div className="flex flex-1 flex-col gap-4">
          {/* Name placeholder */}
          <div className="h-8 w-48 animate-pulse rounded-lg bg-gray-200" />
          {/* House badge placeholder */}
          <div className="h-6 w-28 animate-pulse rounded-full bg-gray-200" />

          {/* Detail rows placeholder */}
          <div className="mt-2 flex flex-col gap-3">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="flex gap-4">
                <div className="h-4 w-24 animate-pulse rounded bg-gray-200" />
                <div className="h-4 w-40 animate-pulse rounded bg-gray-200" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
