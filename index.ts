export interface Dashboard {
  start: string
  periodOverride: string
  widgets: Widget[]
  variables: Variable[]
}

export enum VariableType {
  Property = 'property',
  Pattern = 'pattern'
}

export enum VariableInputType {
  Input = 'input',
  Select = 'select',
  Radio = 'radio'
}
export interface Variable {
  id: string
  type: VariableType
  inputType: VariableInputType
  values?: Array<{
    value: string
    label?: string
  }>
  label?: string
  defaultValue?: string | number | boolean
  search?: string
  populateForm?: string
  visible?: boolean
}

export enum WidgetType {
  Metric = 'metric',
  Text = 'text',
  Log = 'log',
  Alarm = 'alarm'
}

export enum StatOp {
  SampleCount = 'SampleCount',
  Average = 'Averagte',
  Sum = 'Sum',
  Minimum = 'Minimum',
  Maximum = 'Maximum',
}

export type Statistic = StatOp | `p${number}`

export interface LegendProperties {
  position: string
}

export enum YAxisPosition {
  Left = 'left',
  Right = 'right'
}

export type AlarmAnnotationItem = string // ARN

export type HorizontalAnnotationFill = 'above' | 'below' | 'none'

export interface SingleAnnotationItem {
  value: number
  label?: string
  color?: string
  fill?: HorizontalAnnotationFill
  visible?: boolean
}

export type SingleVerticalAnnotationItem = SingleAnnotationItem

export type BandVerticalAnnotationItem = [
  Omit<SingleVerticalAnnotationItem, 'fill'>, { value: string, label?: string }
]

export type VerticalAnnotationItem = SingleVerticalAnnotationItem | BandVerticalAnnotationItem

export interface SingleHorizontalAnnotationItem extends SingleAnnotationItem {
  yAxis?: YAxisPosition
}

export type BandHorizontalAnnotationItem = [
  SingleHorizontalAnnotationItem, { value: string, label?: string }
]

export type HorizontalAnnotationItem = SingleHorizontalAnnotationItem | BandHorizontalAnnotationItem

export interface AnnotationProperties {
  alarms: AlarmAnnotationItem[]
  vertical: VerticalAnnotationItem[]
  horizontal: HorizontalAnnotationItem[]
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
  yAxis?: YAxisPosition
}
export type MetricDimension = [dimensionName: string, dimensionValue: string]

export type WidgetMetricWithoutRenderingProperties = [
  namespace: string,
  metricName: string,
  ...MetricDimension[]
]

export type WidgetMetricWithRenderingProperties = [
  namespace: string,
  metricName: string,
  ...MetricDimension[],
  renderingProperties: RenderingPropertiesObject
]

export type ExpressionMetric = [
  {
    expression: string
    label?: string
    id?: string
  }
]
export type WidgetMetric = WidgetMetricWithoutRenderingProperties | WidgetMetricWithRenderingProperties

export enum MetricViewType {
  TimeSeries = 'timeSeries',
  SingleValue = 'singleValue',
  Gauge = 'gauge',
  Bar = 'bar',
  Pie = 'pie'
}

export interface MetricWidgetProperties {
  id?: string
  label?: string
  accountId: string
  region: string
  annotations: AnnotationProperties
  liveData: boolean
  legend: LegendProperties
  metrics: WidgetMetric[]
  period?: number
  sparkline?: boolean
  stacked?: boolean
  stat?: Statistic
  timezone?: string
  title?: string
  view?: MetricViewType
  yAxis?: YAxis
  expression: string
}

export enum LogWidgetView {
  Table = 'table',
  TimeSeries = 'timeSeries'
}

export interface LogWidgetProperties {
  region: string
  title?: string
  query: string
  view?: LogWidgetView
}

export interface TextWidgetProperties {
  markdown: string
}

export enum AlarmWidgetSortBy {
  Default = 'default',
  StateUpdatedTimestamp = 'stateUpdatedTimestamp',
  Timestamp = 'timestamp'
}

export interface AlarmWidgetProperties {
  alarms: string[]
  sortBy?: AlarmWidgetSortBy
  states?: string[]
  title?: string

}

export type WidgetProperties = MetricWidgetProperties | TextWidgetProperties | LogWidgetProperties | AlarmWidgetProperties

export interface Widget {
  type: WidgetType
  x?: number
  y?: number
  width?: number
  height?: number
  properties: WidgetProperties
}
