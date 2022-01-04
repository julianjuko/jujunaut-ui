import styled, { css } from 'styled-components'
import { darken, lighten } from 'polished'

import { TButtonSize, TColorVariant } from './Button.types'
import {
  PRIMARY,
  SECONDARY,
  TERTIARY,
  QUATERNARY,
  QUINARY
} from '../../shared/colors'

interface IProps {
  size: TButtonSize
  variant: TColorVariant
}

const buttonIdle = (color: string) => css`
  background-color: ${color};
  background: linear-gradient(145deg, ${color}, ${darken(0.08, color)});
`

const buttonActive = (color: string) => css`
  background-color: ${color};
  background: linear-gradient(
    145deg,
    ${darken(0.02, color)},
    ${lighten(0.02, color)}
  );
`

const buttonAura = (color: string) => css`
  box-shadow: 1px 1px 2px ${darken(0.2, color)},
    0px 0px 2px ${lighten(0.15, color)};
`

export const Button = styled.button<IProps>`
  display: flex;
  border: none;
  justify-content: center;
  align-items: center;
  text-align: center;

  ${({ size }) =>
    size === 'sm' &&
    css`
      font-size: 0.75rem;
      height: 24px;
      border-radius: 2px;
      padding: 0 8px;
    `}

  ${({ size }) =>
    size === 'md' &&
    css`
      font-size: 0.875rem;
      height: 36px;
      border-radius: 6px;
      padding: 0 12px;
    `}

  ${({ size }) =>
    size === 'lg' &&
    css`
      height: 48px;
      border-radius: 12px;
      padding: 0 16px;
    `}

  ${({ variant }) => variant === 'primary' && buttonIdle(PRIMARY)}
  ${({ variant }) => variant === 'primary' && buttonAura(PRIMARY)}

  ${({ variant }) => variant === 'secondary' && buttonIdle(SECONDARY)}
  ${({ variant }) => variant === 'secondary' && buttonAura(SECONDARY)}

  ${({ variant }) => variant === 'tertiary' && buttonIdle(TERTIARY)}
  ${({ variant }) => variant === 'tertiary' && buttonAura(TERTIARY)}

  ${({ variant }) => variant === 'quaternary' && buttonIdle(QUATERNARY)}
  ${({ variant }) => variant === 'quaternary' && buttonAura(QUATERNARY)}

  ${({ variant }) => variant === 'quinary' && buttonIdle(QUINARY)}
  ${({ variant }) => variant === 'quinary' && buttonAura(QUINARY)}

  &:active {
    ${({ variant }) => variant === 'primary' && buttonActive(PRIMARY)}
    ${({ variant }) => variant === 'secondary' && buttonActive(SECONDARY)}
    ${({ variant }) => variant === 'tertiary' && buttonActive(TERTIARY)}
    ${({ variant }) => variant === 'quaternary' && buttonActive(QUATERNARY)}
    ${({ variant }) => variant === 'quinary' && buttonActive(QUINARY)}
  }
`

export default Button
