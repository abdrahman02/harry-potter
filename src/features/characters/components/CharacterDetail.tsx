import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, User } from "lucide-react"
import type { Character } from "@src/features/characters/types"

interface CharacterDetailProps {
  character: Character
}

interface DetailRowProps {
  label: string
  value: string | null | undefined
}

function DetailRow({ label, value }: DetailRowProps) {
  if (!value) return null
  return (
    <div className="flex flex-col gap-0.5 sm:flex-row sm:gap-4">
      <dt className="min-w-32 text-sm font-medium text-gray-500">{label}</dt>
      <dd className="text-sm capitalize text-gray-900">{value}</dd>
    </div>
  )
}

export function CharacterDetail({ character }: CharacterDetailProps) {
  const wandDescription =
    [
      character.wand.wood && `${character.wand.wood} wood`,
      character.wand.core && `${character.wand.core} core`,
      character.wand.length != null && `${character.wand.length}"`,
    ]
      .filter(Boolean)
      .join(", ") || null

  const role = character.hogwartsStudent
    ? "Hogwarts Student"
    : character.hogwartsStaff
      ? "Hogwarts Staff"
      : null

  return (
    <div className="animate-fade-in flex flex-col gap-8">
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900"
        >
          <ArrowLeft size={15} />
          Back to Characters
        </Link>
      </div>

      <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
        {/* Character image */}
        <div className="relative mx-auto aspect-square w-48 flex-shrink-0 overflow-hidden rounded-2xl bg-gray-100 sm:mx-0 sm:w-64">
          {character.image ? (
            <Image
              src={character.image}
              alt={character.name}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 192px, 256px"
              priority
            />
          ) : (
            <div
              className="flex h-full w-full items-center justify-center text-gray-200"
              aria-hidden="true"
            >
              <User size={80} strokeWidth={1} />
            </div>
          )}
        </div>

        {/* Character info */}
        <div className="flex flex-1 flex-col gap-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{character.name}</h1>
            {character.house && (
              <span
                className="mt-2 inline-block rounded-full px-3 py-1 text-sm font-medium text-white"
                style={{ backgroundColor: "var(--house-primary)" }}
              >
                {character.house}
              </span>
            )}
          </div>

          <dl className="flex flex-col gap-3">
            <DetailRow label="Species" value={character.species} />
            <DetailRow label="Gender" value={character.gender} />
            <DetailRow label="Date of Birth" value={character.dateOfBirth} />
            <DetailRow label="Ancestry" value={character.ancestry} />
            <DetailRow label="Eye Colour" value={character.eyeColour} />
            <DetailRow label="Hair Colour" value={character.hairColour} />
            <DetailRow label="Patronus" value={character.patronus} />
            <DetailRow label="Wand" value={wandDescription} />
            <DetailRow label="Actor" value={character.actor} />
            <DetailRow label="Role" value={role} />
            <DetailRow label="Status" value={character.alive ? "Alive" : "Deceased"} />
          </dl>
        </div>
      </div>
    </div>
  )
}
