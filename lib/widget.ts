import type { AnnotationProperties } from './annotation'
import type { Statistic, YAxisPositionValue } from './common'

export interface LegendProperties {
  position: string
}

export interface AxisProperties {
  label?: string
  min?: number
  max?: number
  showUnits?: boolean
}

export interface YAxis {
  left?: AxisProperties
  right?: AxisProperties
}

export interface RenderingPropertiesObject {
  color?: string
  label?: string
  period?: number
  stat?: Statistic
  visible?: boolean
  yAxis?: YAxisPositionValue
  id?: string
}

export type WidgetMetricWithoutRenderingProperties = [
  namespace: string,
  metricName: string,
  ...dimensionNameValues: string[],
]

export type WidgetMetricWithRenderingProperties = [
  namespace: string,
  metricName: string,
  ...dimensionNameValues: string[],
  renderingProperties: RenderingPropertiesObject
]

export type ExpressionMetric = [
  {
    expression: string
    label?: string
    id?: string
    period?: number
  }
]
export type WidgetMetric = WidgetMetricWithoutRenderingProperties | WidgetMetricWithRenderingProperties | ExpressionMetric

export enum MetricViewType {
  TimeSeries = 'timeSeries',
  SingleValue = 'singleValue',
  Gauge = 'gauge',
  Bar = 'bar',
  Pie = 'pie'
}

export type MetricViewTypeValue = MetricViewType | `${MetricViewType}`

export interface MetricWidgetProperties {
  id?: string
  label?: string
  accountId?: string
  region?: string
  annotations?: AnnotationProperties
  liveData?: boolean
  legend?: LegendProperties
  metrics?: WidgetMetric[]
  period?: number
  sparkline?: boolean
  stacked?: boolean
  stat?: Statistic
  timezone?: string
  title?: string
  view?: MetricViewTypeValue
  yAxis?: YAxis
}

export enum LogWidgetView {
  Table = 'table',
  TimeSeries = 'timeSeries'
}

export type LogWidgetViewValue = LogWidgetView | `${LogWidgetView}`

export interface LogWidgetProperties {
  region: string
  title?: string
  query: string
  view?: LogWidgetViewValue
}

export interface TextWidgetProperties {
  markdown: string
}

export enum AlarmWidgetSortBy {
  Default = 'default',
  StateUpdatedTimestamp = 'stateUpdatedTimestamp',
  Timestamp = 'timestamp'
}

export type AlarmWidgetSortByValue = AlarmWidgetSortBy | `${AlarmWidgetSortBy}`

export interface AlarmWidgetProperties {
  alarms: string[]
  sortBy?: AlarmWidgetSortByValue
  states?: string[]
  title?: string
}

enum AggregateByFunc {
  AVG = 'AVG',
  MIN = 'MIN',
  MAX = 'MAX',
  STDDEV = 'STDDEV',
  SUM = 'SUM'
}

export type AggregateByFuncValue = AggregateBy | `${AggregateByFunc}`

export interface AggregateBy {
  key: string
  func: AggregateByFuncValue
}

export interface Label {
  key: string
  value?: string
}

export interface ExplorerMetric {
  metricName: string
  resourceType: string
  stat: Statistic
}

export interface ExplorerWidgetOptions {
  legend?: {
    position: 'right' | 'bottom' | 'hidden'
  }
  rowsPerPage?: number
  stacked?: boolean
  view?: MetricViewTypeValue
  widgetsPerRow?: number
}

export interface ExplorerWidgetProperties {
  aggregateBy?: AggregateBy
  labels: Label[]
  metrics: ExplorerMetric[]
  period?: number
  splitBy?: string
  title?: string
  widgetOptions?: ExplorerWidgetOptions
}

export type WidgetProperties = MetricWidgetProperties | TextWidgetProperties | LogWidgetProperties | AlarmWidgetProperties | ExplorerWidgetProperties

export enum WidgetType {
  Metric = 'metric',
  Text = 'text',
  Log = 'log',
  Alarm = 'alarm',
  Explorer = 'explorer'
}

export type WidgetTypeValue = WidgetType | `${WidgetType}`

export interface Widget {
  type: WidgetTypeValue
  x?: number
  y?: number
  width?: number
  height?: number
  properties: WidgetProperties
}
