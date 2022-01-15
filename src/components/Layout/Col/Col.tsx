import React from 'react'
import styled from 'styled-components'

import { widthFactor } from '../../../constants/style'
import { colorVariant } from '../../../utils/color'
import { RenderProps, Props } from './Col.types'

const SCol = styled.div.attrs((props: RenderProps) => props)`
  background-color: ${props => props.bgColor};
  width: ${props => props.width ? `${props.width * widthFactor}%` : '0'};
  display: flex;
`

const render = (props: RenderProps): JSX.Element => {
  return <SCol {...props}>{props.children}</SCol>
}

export const Col: React.FC<Props> = (props) => {
  const color = props.bgColor
    ? colorVariant(props.bgColor, props.shade)
    : 'none'

  return render({
    children: props.children,
    bgColor: color,
    width: props.width,
    className: props.className
  })
}
