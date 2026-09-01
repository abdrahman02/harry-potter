const BASE_URL = process.env.NEXT_PUBLIC_HP_API_URL

if (!BASE_URL) {
  throw new Error("NEXT_PUBLIC_HP_API_URL is not defined in environment")
}

export async function hpFetch<T>(endpoint: string): Promise<T> {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    next: { revalidate: 3600 },
  })

  if (!res.ok) {
    throw new Error(`HP API error: ${res.status} ${res.statusText}`)
  }

  return res.json() as Promise<T>
}
