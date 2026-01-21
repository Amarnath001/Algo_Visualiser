/**
 * Queue algorithm specific types
 */

export interface QueueInput {
  values: (string | number)[];
}

export interface QueueStep {
  queue?: (string | number)[];
  current?: string | number;
  result?: any[];
  description?: string;
}
