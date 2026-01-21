/**
 * Stack algorithm specific types
 */

export interface StackInput {
  values: (string | number)[];
}

export interface StackStep {
  stack?: (string | number)[];
  current?: string | number;
  result?: boolean | any;
  description?: string;
}
