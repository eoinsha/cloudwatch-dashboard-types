/* eslint-disable @typescript-eslint/no-unused-vars */
import { type AnnotationProperties } from '../lib/annotation'

const a: AnnotationProperties = {
  horizontal: [
    {
      visible: true,
      color: '#9467bd',
      label: 'Critical range',
      value: 20,
      fill: 'above',
      yAxis: 'right'
    }
  ]
}

const b: AnnotationProperties = {
  horizontal: [
    [
      {
        label: 'Band top',
        value: 200,
        color: '#9467bd',
        visible: true,
        yAxis: 'right'
      },
      {
        value: 95.5,
        label: 'Band bottom'
      }
    ]
  ]
}

const c: AnnotationProperties = {
  horizontal: [
    [
      {
        label: 'Band top',
        value: 200,
        color: '#9467bd',
        visible: true,
        yAxis: 'right'
      },
      {
        value: 95.5,
        label: 'Band bottom'
      }
    ],
    {
      visible: true,
      color: '#9467bd',
      label: 'Label for this annotation',
      value: 20,
      fill: 'below',
      yAxis: 'right'
    },
    {
      visible: false,
      color: '#aaa',
      label: 'Hidden annotation',
      value: 150
    }
  ]
}

const d: AnnotationProperties = {
  vertical: [
    {
      visible: true,
      color: '#9467bd',
      label: 'Bug fix deployed',
      value: '2018-08-28T15:25:26Z',
      fill: 'after'
    }
  ]
}

const e: AnnotationProperties = {
  vertical: [
    [
      {
        label: 'Band start',
        value: '2018-08-27T15:25:26Z',
        color: '#9467bd',
        visible: true
      },
      {
        value: '2018-08-28T15:25:26Z',
        label: 'Band end'
      }
    ]
  ]
}
