import React from 'react'
import styled from 'styled-components'

import { colorVariant } from '../../../utils/color'
import { RenderProps, Props } from './Container.types'

const SContainer = styled.div.attrs((props: RenderProps) => props)`
  background-color: ${(props) => props.bgColor};
  padding: ${(props) => (props.padding ? `${props.padding}px` : '0')};
  display: flex;
  flex-direction: column;
  width: 100%;
`

const render = (props: RenderProps): JSX.Element => {
  return <SContainer {...props}>{props.children}</SContainer>
}

export const Container: React.FC<Props> = (props) => {
  const color = props.bgColor
    ? colorVariant(props.bgColor, props.shade)
    : 'none'

  return render({
    children: props.children,
    bgColor: color,
    padding: props.padding,
    className: props.className
  })
}
