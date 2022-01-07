import React from 'react'
import styled from 'styled-components'

import { TColorShade, TColorVariant } from '../../../types/color'
import { colorVariant } from '../../../utils/color'

interface IProps {
  bgColor: TColorVariant
  shade?: TColorShade
  padding?: number
}

export const Container: React.FC<IProps> = (props) => {
  const color = colorVariant(props.bgColor, props.shade)
  console.log(color)

  const StyledComponent = styled.div`
    background-color: ${color};
    padding: ${props.padding}px;
    display: flex;
    width: 100%;
  `

  return <StyledComponent />
}
