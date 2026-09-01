"use client"

import { cn } from "@src/shared/utils/cn"

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}
export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null

  // Always show first, last, and pages adjacent to the current page
  const allPages = Array.from({ length: totalPages }, (_, i) => i + 1)
  const visiblePages = allPages.filter(
    (p) => p === 1 || p === totalPages || Math.abs(p - currentPage) <= 1,
  )

  return (
    <nav aria-label="Pagination" className="flex items-center justify-center gap-1">
      {/* Previous */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
        className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Prev
      </button>

      {/* Page numbers with ellipsis between gaps */}
      {visiblePages.map((page, idx) => {
        const prev = visiblePages[idx - 1]
        const showEllipsis = prev !== undefined && page - prev > 1

        return (
          <span key={page} className="flex items-center gap-1">
            {showEllipsis && <span className="px-1 text-gray-400">…</span>}
            <button
              onClick={() => onPageChange(page)}
              aria-current={currentPage === page ? "page" : undefined}
              className={cn(
                "min-w-[36px] rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                currentPage === page
                  ? "bg-gray-900 text-white"
                  : "text-gray-600 hover:bg-gray-100",
              )}
            >
              {page}
            </button>
          </span>
        )
      })}

      {/* Next */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
        className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Next
      </button>
    </nav>
  )
}
