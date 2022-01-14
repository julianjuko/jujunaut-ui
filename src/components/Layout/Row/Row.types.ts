import { ColorShade, ColorVariant } from '../../../types/color'

type BaseProps = {
  height: number
  className?: string
}

export type RenderProps = React.PropsWithChildren<BaseProps & {
  bgColor: string
}>

export type Props = React.PropsWithChildren<BaseProps & {
  bgColor?: ColorVariant
  shade?: ColorShade
}>
