import { darken, lighten } from 'polished'
import { PRIMARY, QUINARY, SECONDARY, TERTIARY } from '../shared/colors'
import { TColorShade, TColorVariant } from '../types/color'

const applyShade = (color: string, shade?: TColorShade) => {
  if (shade === 'light') {
    return lighten('0.1', color)
  }

  if (shade === 'dark') {
    return darken('0.1', color)
  }

  return color
} 

export const colorVariant = (variant: TColorVariant, shade?: TColorShade ): string => {
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
    return applyShade(TERTIARY, shade)
  }

  //quinary
  return applyShade(QUINARY, shade)
}
