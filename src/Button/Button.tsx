import React from 'react'
import classnames from 'classnames'

import './Button.scss'

type TColorVariant = 'primary' | 'secondary'

interface IProps {
  variant: TColorVariant;
}

export const Button: React.FC<IProps> = (props) => {
  return (
    <button
      className={classnames('ju-button', {
        [`btn-${props.variant}`]: props.variant,
      })}
    >
      {props.children}
    </button>
  )
}

export default Button
