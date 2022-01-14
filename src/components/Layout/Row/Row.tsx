import React from 'react'
import styled from 'styled-components'

import { colorVariant } from '../../../utils/color'
import { RenderProps, Props } from './Row.types'

const render = (props: RenderProps): JSX.Element => {
  const Row = styled.div.attrs((props) =>
    props.className
      ? {
          className: props.className
        }
      : {}
  )`
    background-color: ${props.bgColor};
    height: ${props.height ? `${props.height}px` : '0'};
    display: flex;
    flex-direction: row;
    width: 100%;
  `

  return <Row>{props.children}</Row>
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
