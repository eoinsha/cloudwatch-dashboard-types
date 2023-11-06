import { type Variable } from './variable'
import { type Widget } from './widget'

export enum PeriodOverride {
  Auto = 'auto',
  inherit = 'inherit'
}

export type PeriodOverrideValue = PeriodOverride | `${PeriodOverride}`

export interface Dashboard {
  start?: string
  end?: string
  periodOverride?: PeriodOverrideValue
  widgets: Widget[]
  variables?: Variable[]
}
