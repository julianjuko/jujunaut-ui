import { darken, lighten, tint } from 'polished'
import {
  PRIMARY,
  SECONDARY,
  TERTIARY,
  QUATERNARY,
  QUINARY
} from '../constants/colors'
import { ColorShade, ColorVariant } from '../types/color'

const applyShade = (color: string, shade?: ColorShade) => {
  if (shade === 'light') {
    return lighten('0.1', color)
  }

  if (shade === 'dark') {
    return tint('0.1', (darken('0.1', color)))
  }

  return color
}

export const colorVariant = (
  variant: ColorVariant,
  shade?: ColorShade
): string => {
  if (variant === 'primary') {
    return applyShade(PRIMARY, shade)
  }

  if (variant === 'secondary') {
    return applyShade(SECONDARY, shade)
  }

  if (variant === 'tertiary') {
    return applyShade(TERTIARY, shade)
  }

  if (variant === 'quaternary') {
    return applyShade(QUATERNARY, shade)
  }

  //quinary
  return applyShade(QUINARY, shade)
}
