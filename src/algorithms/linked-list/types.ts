/**
 * Linked List algorithm specific types
 */

export interface ListNode {
  val: number;
  next: ListNode | null;
}

export interface LinkedListInput {
  head: ListNode | null;
  values?: number[];
}

export interface LinkedListStep {
  current?: ListNode;
  prev?: ListNode;
  next?: ListNode;
  head?: ListNode;
  description?: string;
}
