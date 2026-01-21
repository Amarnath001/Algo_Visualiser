# Algorithms Directory

This directory contains all algorithm implementations organized by **data structure**.

## Organization Structure

Algorithms are organized by the data structure they work with, not by algorithm type:

```
algorithms/
├── array/              # Array-based algorithms
│   ├── sorting/        # Sorting algorithms (work with arrays)
│   ├── searching/      # Searching algorithms (work with arrays)
│   └── types.ts        # Array-specific types
├── linked-list/        # Linked list algorithms
├── tree/               # Tree algorithms
│   ├── traversal/      # Tree traversal algorithms
│   └── search/         # Tree search algorithms
├── graph/              # Graph algorithms
├── hash-table/         # Hash table algorithms
├── stack/              # Stack algorithms
└── queue/              # Queue algorithms
```

## Why Organize by Data Structure?

- **Clearer organization**: All algorithms for a data structure are in one place
- **Easier navigation**: Find all array algorithms or all tree algorithms quickly
- **Better code reusability**: Data structure-specific types and utilities are grouped together
- **Simpler visualization**: Visualizer components can be organized by data structure too

## Adding a New Algorithm

1. **Identify the data structure** your algorithm works with
2. **Navigate to the appropriate directory** (e.g., `array/`, `tree/`, `graph/`)
3. **Determine the algorithm category** (e.g., sorting, traversal, pathfinding)
4. **Create your algorithm directory** following the pattern:
   ```
   {dataStructure}/{category}/{algorithmName}/
   ```
   Example: `array/sorting/bubbleSort/`
5. **Implement the Algorithm interface** from `@core/types`
6. **Export it** in the category's `index.ts`
7. **Create visualization component** in `src/visualizer/components/{dataStructure}/{algorithmName}/`

## Example: Adding Bubble Sort

1. Data structure: **Array**
2. Category: **Sorting**
3. Location: `array/sorting/bubbleSort/`
4. Import and register in: `array/sorting/index.ts`

## Algorithm Interface

All algorithms must implement:

```typescript
interface Algorithm<T> {
  name: string;
  category: string;        // e.g., 'array-sorting'
  dataStructure: string;   // e.g., 'array'
  description?: string;
  execute(input: T, options?: AlgorithmOptions): Generator<AlgorithmStep>;
  validate?(input: T): boolean;
  getDefaultOptions?(): AlgorithmOptions;
}
```

## Available Algorithms

### Array
- **Sorting**: Bubble Sort, Quick Sort, Merge Sort, etc.
- **Searching**: Linear Search, Binary Search, etc.

### Linked List
- Reverse, Merge, Detect Cycle, etc.

### Tree
- **Traversal**: Inorder, Preorder, Postorder, Level Order
- **Search**: Binary Search Tree operations

### Graph
- BFS, DFS, Dijkstra, A*, MST algorithms

### Hash Table
- Collision handling, Hash functions

### Stack
- Valid Parentheses, Next Greater Element

### Queue
- Level Order Traversal, etc.
