import { ColorVariant } from '../../types/color'

export type ButtonSize = 'sm' | 'md' | 'lg'

export type RenderProps = React.PropsWithChildren<{
  size: ButtonSize
  variant: ColorVariant
}>

export type Props = RenderProps
