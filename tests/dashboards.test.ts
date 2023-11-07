/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-template-curly-in-string */
import type { Dashboard } from '..'

/**
 * Example from https://github.com/aws-samples/cloudwatch-dashboards-cloudformation-sample/blob/master/cloudformation/dashboard.json
 */
const dashboard1: Dashboard = {
  widgets: [
    {
      type: 'metric',
      x: 0,
      y: 0,
      width: 18,
      height: 6,
      properties: {
        view: 'timeSeries',
        stacked: false,
        metrics: [
          ['AWS/Lambda', 'Invocations', 'FunctionName', '${FunctionName}', {
            period: 86400,
            stat: 'Sum'
          }]
        ],
        region: '${AWS::Region}',
        yAxis: {
          left: {
            min: 0
          }
        }
      }
    },
    {
      type: 'metric',
      x: 18,
      y: 0,
      width: 6,
      height: 3,
      properties: {
        title: 'Last Datapoint',
        view: 'singleValue',
        metrics: [
          ['AWS/Lambda', 'Invocations', 'FunctionName', '${FunctionName}', {
            period: 86400,
            stat: 'Sum'
          }]
        ],
        region: '${AWS::Region}',
        yAxis: {
          left: {
            min: 0
          }
        },
        period: 300
      }
    },
    {
      type: 'metric',
      x: 18,
      y: 3,
      width: 6,
      height: 3,
      properties: {
        title: 'Alarm',
        annotations: {
          alarms: [
            'arn:aws:cloudwatch:${AWS::Region}:${AWS::AccountId}:alarm:${InvocationsAlarm}'
          ]
        },
        yAxis: {
          left: {
            min: 0
          }
        },
        view: 'timeSeries',
        stacked: false
      }
    },
    {
      type: 'metric',
      x: 0,
      y: 7,
      width: 18,
      height: 6,
      properties: {
        view: 'timeSeries',
        stacked: false,
        metrics: [
          ['AWS/Lambda', 'Duration', 'FunctionName', '${FunctionName}', {
            period: 86400,
            stat: 'Sum'
          }]
        ],
        region: '${AWS::Region}',
        yAxis: {
          left: {
            min: 0
          }
        }
      }
    },
    {
      type: 'metric',
      x: 18,
      y: 7,
      width: 6,
      height: 3,
      properties: {
        title: 'Last Datapoint',
        view: 'singleValue',
        metrics: [
          ['AWS/Lambda', 'Duration', 'FunctionName', '${FunctionName}', {
            period: 86400,
            stat: 'Sum'
          }]
        ],
        region: '${AWS::Region}',
        yAxis: {
          left: {
            min: 0
          }
        },
        period: 300
      }
    },
    {
      type: 'metric',
      x: 18,
      y: 10,
      width: 6,
      height: 3,
      properties: {
        title: 'Alarm',
        annotations: {
          alarms: [
            'arn:aws:cloudwatch:${AWS::Region}:${AWS::AccountId}:alarm:${DurationAlarm}'
          ]
        },
        yAxis: {
          left: {
            min: 0
          }
        },
        view: 'timeSeries',
        stacked: false
      }
    },
    {
      type: 'metric',
      x: 0,
      y: 13,
      width: 18,
      height: 6,
      properties: {
        view: 'timeSeries',
        stacked: false,
        metrics: [
          ['AWS/Lambda', 'Errors', 'FunctionName', '${FunctionName}', {
            period: 86400,
            stat: 'Sum'
          }]
        ],
        region: '${AWS::Region}',
        yAxis: {
          left: {
            min: 0
          }
        }
      }
    },
    {
      type: 'metric',
      x: 18,
      y: 13,
      width: 6,
      height: 3,
      properties: {
        title: 'Last Datapoint',
        view: 'singleValue',
        metrics: [
          ['AWS/Lambda', 'Errors', 'FunctionName', '${FunctionName}', {
            period: 86400,
            stat: 'Sum'
          }]
        ],
        region: '${AWS::Region}',
        yAxis: {
          left: {
            min: 0
          }
        },
        period: 300
      }
    },
    {
      type: 'metric',
      x: 18,
      y: 16,
      width: 6,
      height: 3,
      properties: {
        title: 'Alarm',
        annotations: {
          alarms: [
            'arn:aws:cloudwatch:${AWS::Region}:${AWS::AccountId}:alarm:${ErrorsAlarm}'
          ]
        },
        yAxis: {
          left: {
            min: 0
          }
        },
        view: 'timeSeries',
        stacked: false
      }
    },
    {
      type: 'metric',
      x: 0,
      y: 19,
      width: 24,
      height: 6,
      properties: {
        view: 'timeSeries',
        stacked: false,
        metrics: [
          ['CodeBuddy', 'MemorySizeMB', { period: 86400, yAxis: 'left' }],
          ['.', 'MaxMemoryUsedMB', { yAxis: 'left', period: 86400 }]
        ],
        region: '${AWS::Region}',
        yAxis: {
          left: {
            min: 0
          },
          right: {
            min: 0
          }
        },
        title: 'Memory'
      }
    }
  ]
}

/**
 * Example from https://github.com/ray-project/ray/blob/master/python/ray/autoscaler/aws/cloudwatch/example-cloudwatch-dashboard-config.json
 */
const dashboard2: Dashboard = {
  widgets: [
    {
      type: 'explorer',
      x: 12,
      y: 18,
      width: 12,
      height: 6,
      properties: {
        metrics: [
          {
            metricName: 'CPUUtilization',
            resourceType: 'AWS::EC2::Instance',
            stat: 'Average'
          }
        ],
        aggregateBy: {
          key: '*',
          func: 'SUM'
        },
        labels: [
          {
            key: 'cloudwatch-agent-installed',
            value: 'True'
          },
          {
            key: 'ray-cluster-name',
            value: '{cluster_name}'
          }
        ],
        widgetOptions: {
          legend: {
            position: 'bottom'
          },
          view: 'timeSeries',
          stacked: false,
          rowsPerPage: 1,
          widgetsPerRow: 1
        },
        title: 'Cluster CPU Utilization'
      }
    },
    {
      type: 'explorer',
      x: 0,
      y: 18,
      width: 12,
      height: 6,
      properties: {
        metrics: [
          {
            metricName: 'CPUUtilization',
            resourceType: 'AWS::EC2::Instance',
            stat: 'Average'
          }
        ],
        aggregateBy: {
          key: '*',
          func: 'AVG'
        },
        labels: [
          {
            key: 'cloudwatch-agent-installed',
            value: 'True'
          },
          {
            key: 'ray-cluster-name',
            value: '{cluster_name}'
          }
        ],
        widgetOptions: {
          legend: {
            position: 'bottom'
          },
          view: 'timeSeries',
          stacked: false,
          rowsPerPage: 1,
          widgetsPerRow: 1
        },
        title: 'Single Node CPU Utilization (Avg and Max)'
      }
    },
    {
      type: 'metric',
      x: 12,
      y: 6,
      width: 12,
      height: 6,
      properties: {
        view: 'timeSeries',
        metrics: [
          [{ expression: "SUM(SEARCH('{{cluster_name}-ray-CWAgent,InstanceId} processes_running', 'Average', 300))", label: 'cluster running process sum', id: 'e1' }],
          [{ expression: "SUM(SEARCH('{{cluster_name}-ray-CWAgent,InstanceId} processes_sleeping', 'Average', 300))", label: 'cluster sleeping process sum', id: 'e2' }]
        ],
        region: '{region}',
        stat: 'Average',
        period: 60,
        title: 'Cluster Processes'
      }
    },
    {
      type: 'metric',
      x: 0,
      y: 6,
      width: 12,
      height: 6,
      properties: {
        view: 'timeSeries',
        metrics: [
          [{ expression: "AVG(SEARCH('{{cluster_name}-ray-CWAgent,InstanceId} processes_running', 'Average', 300))", label: 'cluster running process average', id: 'e3' }],
          [{ expression: "AVG(SEARCH('{{cluster_name}-ray-CWAgent,InstanceId} processes_sleeping', 'Average', 300))", label: 'cluster sleeping process average', id: 'e4' }],
          [{ expression: "MAX(SEARCH('{{cluster_name}-ray-CWAgent,InstanceId} processes_running', 'Average', 300))", label: 'cluster running process maximum', id: 'e5' }],
          [{ expression: "MAX(SEARCH('{{cluster_name}-ray-CWAgent,InstanceId} processes_sleeping', 'Average', 300))", label: 'cluster sleeping process maximum', id: 'e6' }]
        ],
        region: '{region}',
        stat: 'Average',
        period: 60,
        title: 'Single Node Processes (Avg and Max)'
      }
    },
    {
      type: 'metric',
      x: 12,
      y: 12,
      width: 12,
      height: 6,
      properties: {
        view: 'timeSeries',
        stacked: false,
        metrics: [
          [{ expression: "SUM(SEARCH('{{cluster_name}-ray-CWAgent,InstanceId} disk_used_percent', 'Average', 300))", label: 'cluster disk used percent sum', id: 'e7', period: 300 }]
        ],
        region: '{region}',
        title: 'Cluster Disk Usage'
      }
    },
    {
      type: 'metric',
      x: 0,
      y: 12,
      width: 12,
      height: 6,
      properties: {
        view: 'timeSeries',
        stacked: false,
        metrics: [
          [{ expression: "AVG(SEARCH('{{cluster_name}-ray-CWAgent,InstanceId} disk_used_percent', 'Average', 300))", id: 'e8', label: 'cluster disk used percent average', period: 300 }],
          [{ expression: "MAX(SEARCH('{{cluster_name}-ray-CWAgent,InstanceId} disk_used_percent', 'Maximum', 300))", id: 'e9', label: 'cluster disk used percent maximum', period: 300 }]

        ],
        region: '{region}',
        title: 'Single Node Disk Usage (Avg and Max)'
      }
    },
    {
      type: 'metric',
      x: 12,
      y: 18,
      width: 12,
      height: 6,
      properties: {
        metrics: [
          [{ expression: "SUM(SEARCH('{{cluster_name}-ray-CWAgent,InstanceId} mem_used_percent', 'Average', 300))", id: 'e10', label: 'cluster mem used percent sum', period: 300 }]

        ],
        view: 'timeSeries',
        stacked: false,
        region: '{region}',
        stat: 'Maximum',
        period: 300,
        // start: '-PT2H',
        // end: 'P0D',
        title: 'Cluster Memory Usage'
      }
    },
    {
      type: 'metric',
      x: 0,
      y: 18,
      width: 12,
      height: 6,
      properties: {
        metrics: [
          [{ expression: "AVG(SEARCH('{{cluster_name}-ray-CWAgent,InstanceId} mem_used_percent', 'Average', 300))", id: 'e11', label: 'cluster mem used percent average', period: 300 }],
          [{ expression: "MAX(SEARCH('{{cluster_name}-ray-CWAgent,InstanceId} mem_used_percent', 'Maximum', 300))", id: 'e12', label: 'cluster mem used percent maximum', period: 300 }]
        ],
        view: 'timeSeries',
        stacked: false,
        region: '{region}',
        stat: 'Maximum',
        period: 300,
        // start: '-PT2H',
        // end: 'P0D',
        title: 'Single Node Memory Usage (Avg and Max)'
      }
    },
    {
      height: 6,
      width: 12,
      y: 0,
      x: 0,
      type: 'metric',
      properties: {
        metrics: [
          [{ expression: "SUM(SEARCH('{{cluster_name}-ray-prometheus,instance} ray_node_cpu_count', 'Maximum', 300))", label: 'cluster cpu sum', id: 'e13' }]
        ],
        view: 'timeSeries',
        stacked: false,
        region: '{region}',
        stat: 'Maximum',
        period: 300,
        // start: '-PT2H',
        // end: 'P0D',
        title: 'Cluster CPUs'
      }
    },
    {
      height: 6,
      width: 12,
      y: 0,
      x: 12,
      type: 'metric',
      properties: {
        metrics: [
          [{
            expression: "SUM(SEARCH('{{cluster_name}-ray-prometheus,instance} object_store_available_memory', 'Average', 300))",
            label: 'cluster object store available memory sum',
            id: 'e14'
          }]
        ],
        view: 'timeSeries',
        stacked: false,
        region: '{region}',
        stat: 'Maximum',
        period: 300,
        // start: '-PT2H',
        // end: 'P0D',
        title: 'Cluster Object Store Available Memory'
      }
    }
  ]
}

const awsDocsExample1: Dashboard = {
  start: '-PT6H',
  periodOverride: 'inherit',
  widgets: [
    {
      type: 'metric',
      x: 0,
      y: 0,
      width: 12,
      height: 6,
      properties: {
        metrics: [
          [
            'AWS/EC2',
            'CPUUtilization',
            'InstanceId',
            'i-012345'
          ]
        ],
        period: 300,
        stat: 'Average',
        region: 'us-east-1',
        title: 'EC2 Instance CPU',
        liveData: false,
        legend: {
          position: 'right'
        }
      }
    },
    {
      type: 'text',
      x: 0,
      y: 7,
      width: 3,
      height: 3,
      properties: {
        markdown: 'Hello world'
      }
    }
  ]
}

const awsDocsExample2: Dashboard = {
  widgets: [{
    height: 6,
    width: 6,
    y: 0,
    x: 0,
    type: 'metric',
    properties: {
      view: 'timeSeries',
      stacked: false,
      metrics: [['AWS/Lambda', 'Invocations', 'FunctionName', 'my-function-name']],
      region: 'us-east-1',
      liveData: true
    }
  },
  {
    height: 12,
    width: 12,
    y: 0,
    x: 6,
    type: 'metric',
    properties: {
      view: 'timeSeries',
      stacked: false,
      metrics: [['AWS/Lambda', 'Errors', 'FunctionName', 'my-function-name']],
      region: 'us-east-1',
      liveData: true
    }
  },

  {
    height: 3,
    width: 6,
    y: 0,
    x: 18,
    type: 'metric',
    properties: {
      view: 'timeSeries',
      stacked: false,
      metrics: [['AWS/Lambda', 'Duration', 'FunctionName', 'my-function-name']],
      region: 'us-east-1',
      liveData: true
    }
  }
  ],
  variables: [{
    type: 'property',
    property: 'FunctionName',
    inputType: 'select',
    id: 'LambdaFunction_Variable',
    label: 'Function',
    visible: true,
    search: '{AWS/Lambda,FunctionName} MetricName="Duration"',
    populateFrom: 'FunctionName'
  }]
}

const awsDocsExample3: Dashboard = {
  widgets: [],
  variables: [{
    type: 'property',
    property: 'region',
    inputType: 'select',
    id: 'unique_id_1',
    label: 'Region',
    defaultValue: 'us-east-1',
    visible: true,
    values: [{
      label: 'IAD',
      value: 'us-east-1'
    },
    {
      label: 'CMH',
      value: 'us-east-2'
    },
    {
      label: 'NRT',
      value: 'ap-northeast-1'
    }
    ]
  },
  {
    type: 'property',
    property: 'FunctionName',
    inputType: 'select',
    id: 'unique_id_2',
    label: 'Function',
    visible: true,
    values: [{
      value: 'my-FunctionName-1'
    },
    {
      value: 'my-FunctionName-2'
    },
    {
      value: 'my-FunctionName-3'
    }
    ]
  },
  {
    type: 'property',
    property: 'accountId',
    inputType: 'radio',
    id: 'unique_id_3',
    defaultValue: '111122223333',
    visible: true,
    values: [{
      label: 'IAD Account',
      value: '111122223333'
    },
    {
      label: 'CMH Account',
      value: '123456789012'
    },
    {
      label: 'NRT Account',
      value: '000000000000'
    }
    ]
  }
  ]
}

const awsDocsExample4: Dashboard = {
  widgets: [
    {
      type: 'log',
      x: 12,
      y: 24,
      width: 12,
      height: 6,
      properties: {
        region: 'us-east-1',
        title: 'Errors (Application Log)',
        query: "SOURCE 'application1.log' | SOURCE 'application2.log' | filter @message like \"[ERROR]\"\n| parse \"Error for [*] [*] due to: *\" canaryName1, canaryId1, cause1\n| parse \"Executor canary [*] *\" canaryName2, cause2\n| fields coalesce(cause1, cause2) as cause\n| fields coalesce(canaryName1, canaryName2) as canaryName\n| fields ispresent(cause) as isP\n| filter isP\n| stats count() as errCount by canaryName, substr(cause, 0, 130)\n| sort errCount DESC",
        view: 'table'
      }
    }
  ]
}

const awsDocsExample5: Dashboard = {
  widgets: [{
    type: 'metric',
    x: 0,
    y: 0,
    width: 12,
    height: 6,
    properties: {
      metrics: [
        [
          'AWS/EC2',
          'CPUUtilization',
          'InstanceId',
          'i-012345'
        ],
        [
          'AWS/EC2',
          'NetworkIn',
          'InstanceId',
          'i-012345',
          {
            yAxis: 'right',
            label: 'NetworkIn',
            period: 3600,
            stat: 'Maximum'
          }
        ]
      ],
      period: 300,
      stat: 'Average',
      region: 'us-east-1',
      timezone: '+0300',
      title: 'EC2 Instance CPU',
      stacked: true,
      view: 'timeSeries',
      liveData: false,
      yAxis: {
        left: {
          min: 0,
          max: 100
        },
        right: {
          min: 50
        }
      },
      annotations: {
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
    }
  },
  {
    type: 'metric',
    x: 18,
    y: 60,
    width: 6,
    height: 6,
    properties: {
      metrics: [
        [
          'AWSLogsShrinkRay',
          'disk_inodes_used',
          'path',
          '/dev/shm',
          'InstanceId',
          'i-012345',
          'AutoScalingGroupName',
          'ShrinkRayExecutorResourceStack-Gamma-us-east-1-ASGuseast1ac48xlargeASGB9B53974-VTYXJUZGUAHV',
          'InstanceType',
          'c4.8xlarge',
          'device',
          'tmpfs',
          'fstype',
          'tmpfs'
        ]
      ],
      view: 'gauge',
      title: 'Disk Inodes Used',
      region: 'us-east-1',
      yAxis: {
        left: {
          min: 0,
          max: 100
        }
      }
    }
  }
  ]
}
