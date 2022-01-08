import React from 'react'
import styled from 'styled-components'

import { ColorShade, ColorVariant } from '../../../types/color'
import { colorVariant } from '../../../utils/color'

type RenderProps = React.PropsWithChildren<{
  bgColor: string
  padding?: number
  className?: string
}>

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
    width: 100%;
  `

  return <Container>{props.children}</Container>
}

type Props = RenderProps & {
  bgColor: ColorVariant
  shade?: ColorShade
}

export const Container: React.FC<Props> = (props) => {
  const color = colorVariant(props.bgColor, props.shade)

  return render({
    bgColor: color,
    padding: props.padding,
    className: props.className
  })
}
