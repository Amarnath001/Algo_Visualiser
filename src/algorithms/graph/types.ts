/**
 * Graph algorithm specific types
 */

export interface GraphInput {
  nodes: GraphNode[];
  edges: GraphEdge[];
  startNode?: string;
  endNode?: string;
}

export interface GraphNode {
  id: string;
  label?: string;
  x?: number;
  y?: number;
}

export interface GraphEdge {
  from: string;
  to: string;
  weight?: number;
}

export interface GraphStep {
  visited?: string[];
  current?: string;
  path?: string[];
  queue?: string[];
  stack?: string[];
  distances?: Record<string, number>;
  description?: string;
}
