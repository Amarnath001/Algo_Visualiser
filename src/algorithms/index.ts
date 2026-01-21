/**
 * Main Algorithms Registry
 * Aggregates all algorithms organized by data structure
 */

import { Algorithm } from '../core/types';

// Import algorithms by data structure
import { arrayAlgorithms } from './array';
import { linkedListAlgorithms } from './linked-list';
import { treeAlgorithms } from './tree';
import { graphAlgorithms } from './graph';
import { hashTableAlgorithms } from './hash-table';
import { stackAlgorithms } from './stack';
import { queueAlgorithms } from './queue';

/**
 * All available algorithms organized by data structure
 */
export const allAlgorithms: Algorithm[] = [
  ...arrayAlgorithms,
  ...linkedListAlgorithms,
  ...treeAlgorithms,
  ...graphAlgorithms,
  ...hashTableAlgorithms,
  ...stackAlgorithms,
  ...queueAlgorithms,
];

/**
 * Get algorithms by data structure
 */
export const algorithmsByDataStructure: Record<string, Algorithm[]> = {
  array: arrayAlgorithms,
  'linked-list': linkedListAlgorithms,
  tree: treeAlgorithms,
  graph: graphAlgorithms,
  'hash-table': hashTableAlgorithms,
  stack: stackAlgorithms,
  queue: queueAlgorithms,
};

/**
 * Get algorithms by category (e.g., 'sorting', 'searching')
 */
export function getAlgorithmsByCategory(category: string): Algorithm[] {
  return allAlgorithms.filter((alg) => alg.category === category);
}

/**
 * Get algorithms by data structure name
 */
export function getAlgorithmsByDataStructure(dataStructure: string): Algorithm[] {
  return algorithmsByDataStructure[dataStructure] || [];
}

// Re-export data structure registries
export { arrayAlgorithms } from './array';
export { linkedListAlgorithms } from './linked-list';
export { treeAlgorithms } from './tree';
export { graphAlgorithms } from './graph';
export { hashTableAlgorithms } from './hash-table';
export { stackAlgorithms } from './stack';
export { queueAlgorithms } from './queue';
