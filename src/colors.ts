export const OCEAN = 'rgb(191, 214, 230)'
export const SUNLIGHT = 'rgb(255, 246, 194)'
export const SUNSET = 'rgb(255, 200, 163)'
export const TWILIGHT = 'rgb(181, 132, 161)'
export const DUSK = 'rgb(146, 112, 153)'

const SEED = Math.floor(Math.random() * 360)
const RANDOM_INTERVAL = 72

const PRIMARY_HUE = SEED
const SECONDARY_HUE =
  PRIMARY_HUE + Math.floor(Math.random() * RANDOM_INTERVAL) + 1
const TERTIARY_HUE =
  SECONDARY_HUE + Math.floor(Math.random() * RANDOM_INTERVAL) + 1
const QUATERNARY_HUE =
  TERTIARY_HUE + Math.floor(Math.random() * RANDOM_INTERVAL) + 1
const QUINARY_HUE =
  QUATERNARY_HUE + Math.floor(Math.random() * RANDOM_INTERVAL) + 1

const PRIMARY_SATURATION = 40
const PRIMARY_LIGHTNESS = 80

const SECONDARY_SATURATION = 100
const SECONDARY_LIGHTNESS = 90

const TERTIARY_SATURATION = 50
const TERTIARY_LIGHTNESS = 70

const QUATERNARY_SATURATION = 80
const QUATERNARY_LIGHTNESS = 80

const QUINARY_SATURATION = 30
const QUINARY_LIGHTNESS = 60

export const PRIMARY = `hsl(
  ${PRIMARY_HUE},
  ${PRIMARY_SATURATION}%,
  ${PRIMARY_LIGHTNESS}%
)`
export const SECONDARY = `hsl(
  ${SECONDARY_HUE},
  ${SECONDARY_SATURATION}%,
  ${SECONDARY_LIGHTNESS}%
)`
export const TERTIARY = `hsl(
  ${TERTIARY_HUE},
  ${TERTIARY_SATURATION}%,
  ${TERTIARY_LIGHTNESS}%
)`
export const QUATERNARY = `hsl(
  ${QUATERNARY_HUE},
  ${QUATERNARY_SATURATION}%,
  ${QUATERNARY_LIGHTNESS}%
)`
export const QUINARY = `hsl(
  ${QUINARY_HUE},
  ${QUINARY_SATURATION}%,
  ${QUINARY_LIGHTNESS}%
)`
