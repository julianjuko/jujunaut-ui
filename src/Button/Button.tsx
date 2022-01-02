import React from 'react'
import classnames from 'classnames'

import { TButtonSize, TColorVariant } from './Button.types'

import './Button.scss'

interface IProps {
  size: TButtonSize
  variant: TColorVariant
}

export const Button: React.FC<IProps> = (props) => {
  return (
    <button
      className={classnames('ju-button', {
        [`btn-${props.variant}`]: props.variant,
        [`ju-button-${props.size}`]: props.size
      })}
    >
      {props.children}
    </button>
  )
}

export default Button
