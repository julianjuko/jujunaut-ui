import React from 'react'
import styled from 'styled-components'

import { widthFactor } from '../../../constants/style'
import { colorVariant } from '../../../utils/color'
import { RenderProps, Props } from './Col.types'

const render = (props: RenderProps): JSX.Element => {
  const Col = styled.div.attrs((props) =>
    props.className
      ? {
          className: props.className
        }
      : {}
  )`
    background-color: ${props.bgColor};
    width: ${props.width ? `${props.width * widthFactor}%` : '0'};
    display: flex;
  `

  return <Col>{props.children}</Col>
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
