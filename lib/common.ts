export enum YAxisPosition {
  Left = 'left',
  Right = 'right'
}

export type YAxisPositionValue = YAxisPosition | `${YAxisPosition}`

export enum StatOp {
  SampleCount = 'SampleCount',
  Average = 'Average',
  Sum = 'Sum',
  Minimum = 'Minimum',
  Maximum = 'Maximum',
}

export type Statistic = StatOp | `${StatOp}` | `p${number}`
