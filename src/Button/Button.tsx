import React from 'react'

import { IProps } from './Button.types'

import './Button.scss'

export const Button: React.FC<IProps> = (props) => {
  return <div className="test-style" title={props.something}></div>
}

export default Button
