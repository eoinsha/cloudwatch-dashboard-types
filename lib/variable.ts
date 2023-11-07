export enum VariableType {
  Property = 'property',
  Pattern = 'pattern'
}

// Defining a separate type for the possible string values, allowing users to provide a string value
export type VariableTypeValue = VariableType | `${VariableType}`

export enum VariableInputType {
  Input = 'input',
  Select = 'select',
  Radio = 'radio'
}

export type VariableInputTypeValue = VariableInputType | `${VariableInputType}`

export interface Variable {
  id: string
  type: VariableTypeValue
  property?: string
  pattern?: string
  inputType: VariableInputTypeValue
  values?: Array<{
    value: string
    label?: string
  }>
  label?: string
  defaultValue?: string | number | boolean
  search?: string
  populateFrom?: string
  visible?: boolean
}
