/**
 * Common algorithm types across all data structures
 * Specific types are defined in each data structure's types.ts file
 */

export type DataStructure = 
  | 'array'
  | 'linked-list'
  | 'tree'
  | 'graph'
  | 'hash-table'
  | 'stack'
  | 'queue';

// Re-export common types from each data structure
export type { SortableInput, SearchableInput, ArrayStep } from './array/types';
export type { LinkedListInput, LinkedListStep } from './linked-list/types';
export type { TreeInput, TreeStep } from './tree/types';
export type { GraphInput, GraphNode, GraphEdge, GraphStep } from './graph/types';
export type { HashTableInput, HashTableStep } from './hash-table/types';
export type { StackInput, StackStep } from './stack/types';
export type { QueueInput, QueueStep } from './queue/types';
