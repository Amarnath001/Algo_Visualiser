/**
 * Array Algorithms Registry
 * All algorithms that work with arrays (sorting, searching, etc.)
 */

import { Algorithm } from '../../core/types';

// Import array algorithm categories
import { sortingAlgorithms } from './sorting';
import { searchingAlgorithms } from './searching';

export const arrayAlgorithms: Algorithm[] = [
  ...sortingAlgorithms,
  ...searchingAlgorithms,
  // Add other array algorithms here (two pointers, sliding window, etc.)
];

export * from './types';
