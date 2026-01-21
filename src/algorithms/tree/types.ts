/**
 * Tree algorithm specific types
 */

export interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

export interface TreeInput {
  root: TreeNode | null;
  values?: number[];
}

export interface TreeStep {
  current?: TreeNode;
  visited?: TreeNode[];
  path?: TreeNode[];
  description?: string;
}
