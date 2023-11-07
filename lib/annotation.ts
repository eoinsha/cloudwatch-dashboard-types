import { type YAxisPositionValue } from './common'

export type AlarmAnnotationItem = string // ARN

export enum HorizontalAnnotationFill {
  Above = 'above',
  Below = 'below',
  None = 'none'
}

export enum VerticalAnnotationFill {
  Before = 'before',
  After = 'after',
  None = 'none'
}

export type HorizontalAnnotationFillValue = HorizontalAnnotationFill | `${HorizontalAnnotationFill}`
export type VerticalAnnotationFillValue = VerticalAnnotationFill | `${VerticalAnnotationFill}`

export interface SingleAnnotationItem<ValueType, FillValue> {
  value: ValueType
  label?: string
  color?: string
  fill?: FillValue
  visible?: boolean
}

export type SingleVerticalAnnotationItem = SingleAnnotationItem<string, VerticalAnnotationFillValue>

export type BandVerticalAnnotationItem = [
  Omit<SingleVerticalAnnotationItem, 'fill'>, { value: string, label?: string }
]

export type VerticalAnnotationItem = SingleVerticalAnnotationItem | BandVerticalAnnotationItem

export interface SingleHorizontalAnnotationItem extends SingleAnnotationItem<number, HorizontalAnnotationFillValue> {
  yAxis?: YAxisPositionValue
}

export type BandHorizontalAnnotationItem = [
  SingleHorizontalAnnotationItem, { value: number, label?: string }
]

export type HorizontalAnnotationItem = SingleHorizontalAnnotationItem | BandHorizontalAnnotationItem

export interface AnnotationProperties {
  alarms?: AlarmAnnotationItem[]
  vertical?: VerticalAnnotationItem[]
  horizontal?: HorizontalAnnotationItem[]
}
