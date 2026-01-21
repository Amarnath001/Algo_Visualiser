/**
 * Core types and interfaces for the Algorithm Visualizer
 */

/**
 * Represents a single step in algorithm execution
 */
export interface AlgorithmStep {
  type: string;
  data: any;
  description?: string;
  highlights?: {
    indices?: number[];
    comparisons?: number;
    swaps?: Array<[number, number]>;
  };
}

/**
 * Result of algorithm execution
 */
export interface AlgorithmResult {
  steps: AlgorithmStep[];
  result: any;
  complexity: {
    time: string;
    space: string;
  };
  executionTime?: number;
}

/**
 * Standard interface that all algorithms must implement
 */
export interface Algorithm<T = any> {
  name: string;
  category: string; // e.g., 'array-sorting', 'tree-traversal', 'graph-pathfinding'
  dataStructure: string; // e.g., 'array', 'tree', 'graph'
  description?: string;
  execute(input: T, options?: AlgorithmOptions): Generator<AlgorithmStep>;
  validate?(input: T): boolean;
  getDefaultOptions?(): AlgorithmOptions;
}

/**
 * Options that can be passed to algorithms
 */
export interface AlgorithmOptions {
  [key: string]: any;
}

/**
 * Visualization configuration
 */
export interface VisualizationConfig {
  speed: number; // Animation speed multiplier
  showStats: boolean;
  highlightColor: string;
  comparisonColor: string;
  swapColor: string;
}

/**
 * Playback state
 */
export enum PlaybackState {
  IDLE = 'idle',
  PLAYING = 'playing',
  PAUSED = 'paused',
  COMPLETED = 'completed',
}
