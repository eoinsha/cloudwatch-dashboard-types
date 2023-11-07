/* eslint-disable @typescript-eslint/no-unused-vars */
import { type WidgetMetric } from '../lib/widget'

const a: WidgetMetric = ['AWS/EC2', 'CPUUtilization']

const b: WidgetMetric = ['AWS/EC2', 'CPUUtilization', 'InstanceId', 'i-012345']

const c: WidgetMetric = ['AWS/EC2', 'DiskReadBytes', 'InstanceId', 'i-xyz', { yAxis: 'right' }]

const d: WidgetMetric[] = [
  ['AWS/EC2', 'DiskReadBytes', 'InstanceId', 'i-xyz'],
  ['.', '.', '.', 'i-abc'],
  ['.', '.', '.', 'i-123']
]

const e: WidgetMetric[] = [
  ['AWS/EC2', 'DiskReadBytes', 'InstanceId', 'i-123', { id: 'm1' }],
  ['.', '.', '.', 'i-abc', { id: 'm2' }],
  [{ expression: 'SUM(METRICS())', label: 'Sum of DiskReadbytes', id: 'e3' }]
]

const f: WidgetMetric = [{ expression: "SEARCH('{AWS/EC2,InstanceId} MetricName=\"CPUUtilization\"', 'Average', 300)", id: 'e1' }]

const g: WidgetMetric[] = [
  ['AWS/EC2', 'DiskReadBytes', 'InstanceId', 'i-xyz'],
  ['.', '.', '.', 'i-abc'],
  ['.', '.', '.', 'i-123', { label: 'Instance i-123', yAxis: 'right' }]
]
