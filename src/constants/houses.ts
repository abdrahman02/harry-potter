export const HOUSES = {
  gryffindor: { label: "Gryffindor", primary: "#740001", accent: "#d3a625" },
  slytherin:  { label: "Slytherin",  primary: "#1a472a", accent: "#aaaaaa" },
  ravenclaw:  { label: "Ravenclaw",  primary: "#0e1a40", accent: "#946b2d" },
  hufflepuff: { label: "Hufflepuff", primary: "#ecb939", accent: "#372e29" },
} as const

export type HouseName = keyof typeof HOUSES

export const HOUSE_NAMES = Object.keys(HOUSES) as HouseName[]
