import React from 'react'
import styled from 'styled-components'

import { colorVariant } from '../../../utils/color'
import { RenderProps, Props } from './Container.types'

const render = (props: RenderProps): JSX.Element => {
  const Container = styled.div.attrs((props) =>
    props.className
      ? {
          className: props.className
        }
      : {}
  )`
    background-color: ${props.bgColor};
    padding: ${props.padding ? `${props.padding}px` : '0'};
    display: flex;
    flex-direction: column;
    width: 100%;
  `

  return <Container>{props.children}</Container>
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
