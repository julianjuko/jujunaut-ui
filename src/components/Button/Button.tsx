import React from 'react'
import styled, { css } from 'styled-components'
import { darken, lighten } from 'polished'

import { ButtonSize, RenderProps, Props } from './Button.types'
import { colorVariant } from '../../utils/color'

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

const buttonSize = (size: ButtonSize) => {
  if (size === 'sm') {
    return css`
      font-size: 0.75rem;
      height: 24px;
      border-radius: 2px;
      padding: 0 8px;
    `
  }

  if (size === 'md') {
    return css`
      font-size: 0.875rem;
      height: 36px;
      border-radius: 6px;
      padding: 0 12px;
    `
  }

  // size === 'lg'
  return css`
    height: 48px;
    border-radius: 12px;
    padding: 0 16px;
  `
}

const SButton = styled.button.attrs((props: RenderProps) => props)`
  display: flex;
  border: none;
  justify-content: center;
  align-items: center;
  text-align: center;

  ${(props) => buttonSize(props.size)}

  ${(props) => buttonIdle(colorVariant(props.variant))}
  ${(props) => buttonAura(colorVariant(props.variant))}

  &:active {
    ${(props) => buttonActive(colorVariant(props.variant))}
  }
`

const render = (props: RenderProps): JSX.Element => {
  return <SButton {...props}>{props.children}</SButton>
}

export const Button: React.FC<Props> = (props) => {
  return render(props)
}
