/**
 * Hash Table algorithm specific types
 */

export interface HashTableInput {
  keys: (string | number)[];
  values?: any[];
  size?: number;
}

export interface HashTableStep {
  key?: string | number;
  hash?: number;
  index?: number;
  collision?: boolean;
  table?: Array<Array<{ key: string | number; value: any }>>;
  description?: string;
}
