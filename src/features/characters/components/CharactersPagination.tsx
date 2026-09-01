"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { Pagination } from "@src/shared/components/Pagination"

interface CharactersPaginationProps {
  currentPage: number
  totalPages: number
}

export function CharactersPagination({
  currentPage,
  totalPages,
}: CharactersPaginationProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  function handlePageChange(page: number) {
    const params = new URLSearchParams(searchParams.toString())
    params.set("page", String(page))
    router.push(`/?${params.toString()}`)
  }

  return (
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={handlePageChange}
    />
  )
}
