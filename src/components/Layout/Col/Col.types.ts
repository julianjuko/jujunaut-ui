import { ColorShade, ColorVariant } from '../../../types/color'
import { Width } from '../../../types/grid'

type BaseProps = {
  width: Width
  className?: string
}

export type RenderProps = React.PropsWithChildren<BaseProps & {
  bgColor: string
}>

export type Props = React.PropsWithChildren<BaseProps & {
  bgColor?: ColorVariant
  shade?: ColorShade
}>
