# CloudWatch Dashboard Types

TypeScript definitions for AWS CloudWatch Dashboards.

This package provides a set of TypeScript types that make it easier to work with AWS CloudWatch Dashboard JSON. 

## Features

Complete TypeScript types for CloudWatch Dashboard widgets, including metric widgets, log widgets, text widgets, alarm widgets, and explorer widgets.
- Enums and type guards for CloudWatch Dashboard properties.
- Support for CloudWatch Dashboard annotations and variables.

## Installation

Use the following command to install `cloudwatch-dashboard-types`:

```bash
npm install cloudwatch-dashboard-types --save-dev
```

## Usage

```typescript
import { Dashboard, MetricWidgetProperties, Widget } from 'cloudwatch-dashboard-types';

const myDashboard: Dashboard = {
  widgets: [
    {
      type: 'metric',
      x: 0,
      y: 0,
      width: 12,
      height: 6,
      properties: { /* ... */ } as MetricWidgetProperties,
    },
    // Add more widgets...
  ],
};
```

## Testing
A set of sample dashboards and other objects are declared in the modules within `tests/`.  These are taken from various sources and aim to provide validation that the type coverage is accurate.

Linting and testing of all types can be run with:
```bash
npm test
```

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request or open an issue if you have feedback or suggestions for improvement.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
