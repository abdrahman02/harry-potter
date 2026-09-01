"use client"

import Link from "next/link"

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-red-100 bg-red-50 px-6 py-24 text-center">
      <span className="text-5xl" aria-hidden="true">
        🔮
      </span>
      <div>
        <h2 className="text-lg font-semibold text-red-800">Character not found</h2>
        <p className="mt-1 text-sm text-red-600">
          {error.message || "This character may not exist in our records."}
        </p>
      </div>
      <div className="flex gap-3">
        <button
          onClick={reset}
          className="rounded-lg border border-red-200 px-4 py-2 text-sm font-medium text-red-700 transition-colors hover:bg-red-100"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700"
        >
          Back to Characters
        </Link>
      </div>
    </div>
  )
}
