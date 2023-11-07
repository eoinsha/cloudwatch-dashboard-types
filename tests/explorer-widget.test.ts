/* eslint-disable @typescript-eslint/no-unused-vars */
import { type Widget } from '..'

const a: Widget = {
  type: 'explorer',
  width: 24,
  height: 15,
  x: 0,
  y: 0,
  properties: {
    metrics: [
      {
        metricName: 'CPUUtilization',
        resourceType: 'AWS::EC2::Instance',
        stat: 'Average'
      },
      {
        metricName: 'NetworkIn',
        resourceType: 'AWS::EC2::Instance',
        stat: 'Average'
      },
      {
        metricName: 'NetworkOut',
        resourceType: 'AWS::EC2::Instance',
        stat: 'Average'
      }
    ],
    aggregateBy: {
      key: 'InstanceType',
      func: 'MAX'
    },
    labels: [
      {
        key: 'State',
        value: 'running'
      }
    ],
    widgetOptions: {
      legend: {
        position: 'bottom'
      },
      view: 'timeSeries',
      rowsPerPage: 8,
      widgetsPerRow: 2
    },
    period: 300,
    splitBy: 'AvailabilityZone',
    title: 'Running EC2 Instances by AZ'
  }
}
