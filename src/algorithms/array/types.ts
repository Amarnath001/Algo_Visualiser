/**
 * Array algorithm specific types
 */

export interface SortableInput {
  array: number[];
}

export interface SearchableInput {
  array: number[];
  target: number;
}

export interface ArrayStep {
  array: number[];
  comparing?: [number, number];
  swapping?: [number, number];
  sorted?: number[];
  pivot?: number;
  currentIndex?: number;
  left?: number;
  right?: number;
  mid?: number;
  found?: boolean;
  description?: string;
}
