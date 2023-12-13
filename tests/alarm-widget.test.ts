/* eslint-disable @typescript-eslint/no-unused-vars */
import { type Widget } from '../lib/widget'

const a: Widget = {
  type: 'alarm',
  x: 0,
  y: 0,
  width: 12,
  height: 6,
  properties: {
    alarms: [
      'arn:aws:cloudwatch:us-east-1:012345678901:alarm:EC2FrontendCPU',
      'arn:aws:cloudwatch:us-east-1:012345678901:alarm:EC2BackendCPU',
      'arn:aws:cloudwatch:eu-west-1:987654321098:alarm:EC2FrontendCPU',
      'arn:aws:cloudwatch:eu-west-1:987654321098:alarm:EC2BackendCPU'
    ],
    sortBy: 'stateUpdatedTimestamp',
    title: 'All EC2 CPU alarms'
  }
}

const b: Widget = {
  type: 'alarm',
  x: 0,
  y: 0,
  width: 12,
  height: 6,
  properties: {
    alarms: [
      'arn:aws:cloudwatch:us-east-1:012345678901:alarm:EC2FrontendCPU',
      'arn:aws:cloudwatch:us-east-1:012345678901:alarm:EC2BackendCPU',
      'arn:aws:cloudwatch:eu-west-1:987654321098:alarm:EC2FrontendCPU',
      'arn:aws:cloudwatch:eu-west-1:987654321098:alarm:EC2BackendCPU'
    ],
    sortBy: 'stateUpdatedTimestamp',
    states: [
      'ALARM',
      'INSUFFICIENT_DATA'
    ],
    title: 'EC2 alarms that are not currently OK'
  }
}

const textWidget: Widget = {
  type: 'text',
  x: 0,
  y: 0,
  width: 24,
  height: 6,
  properties: {
    markdown: '# Hello World',
    transparent: true
  }
}
