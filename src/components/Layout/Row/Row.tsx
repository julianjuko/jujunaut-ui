import React from 'react'
import styled from 'styled-components'

import { colorVariant } from '../../../utils/color'
import { RenderProps, Props } from './Row.types'

const SRow = styled.div.attrs((props: RenderProps) => props)`
  background-color: ${props => props.bgColor};
  height: ${props => props.height ? `${props.height}px` : '0'};
  display: flex;
  flex-direction: row;
  width: 100%;
`

const render = (props: RenderProps): JSX.Element => {
  return <SRow {...props}>{props.children}</SRow>
}

export const Row: React.FC<Props> = (props) => {
  const color = props.bgColor
    ? colorVariant(props.bgColor, props.shade)
    : 'none'

  return render({
    children: props.children,
    bgColor: color,
    height: props.height,
    className: props.className
  })
}
