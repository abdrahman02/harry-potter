"use client"

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-red-100 bg-red-50 px-6 py-24 text-center">
      <span className="text-5xl" aria-hidden="true">⚠️</span>
      <div>
        <h2 className="text-lg font-semibold text-red-800">Failed to load spells</h2>
        <p className="mt-1 text-sm text-red-600">
          {error.message || "Something went wrong. Please try again."}
        </p>
      </div>
      <button
        onClick={reset}
        className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
      >
        Try Again
      </button>
    </div>
  )
}
