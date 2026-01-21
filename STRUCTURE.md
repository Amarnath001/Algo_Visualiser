# Project Structure Overview

## Data Structure-Based Organization

Algorithms are organized by **data structure** rather than algorithm type, making it easier to find and maintain related algorithms.

## Directory Structure

```
src/
├── algorithms/                    # All algorithm implementations
│   ├── array/                     # Array-based algorithms
│   │   ├── sorting/               # Sorting algorithms (work with arrays)
│   │   │   ├── bubbleSort/
│   │   │   ├── quickSort/
│   │   │   ├── mergeSort/
│   │   │   └── index.ts
│   │   ├── searching/             # Searching algorithms (work with arrays)
│   │   │   ├── linearSearch/
│   │   │   ├── binarySearch/
│   │   │   └── index.ts
│   │   ├── types.ts               # Array-specific types
│   │   └── index.ts               # Array algorithms registry
│   │
│   ├── linked-list/               # Linked list algorithms
│   │   ├── reverse/
│   │   ├── merge/
│   │   ├── detectCycle/
│   │   ├── types.ts
│   │   └── index.ts
│   │
│   ├── tree/                      # Tree algorithms
│   │   ├── traversal/             # Tree traversal algorithms
│   │   │   ├── inorder/
│   │   │   ├── preorder/
│   │   │   ├── postorder/
│   │   │   └── levelOrder/
│   │   ├── search/                # Tree search algorithms
│   │   ├── types.ts
│   │   └── index.ts
│   │
│   ├── graph/                     # Graph algorithms
│   │   ├── bfs/
│   │   ├── dfs/
│   │   ├── dijkstra/
│   │   ├── aStar/
│   │   ├── types.ts
│   │   └── index.ts
│   │
│   ├── hash-table/                # Hash table algorithms
│   │   ├── collisionHandling/
│   │   ├── types.ts
│   │   └── index.ts
│   │
│   ├── stack/                     # Stack algorithms
│   │   ├── validParentheses/
│   │   ├── types.ts
│   │   └── index.ts
│   │
│   ├── queue/                     # Queue algorithms
│   │   ├── types.ts
│   │   └── index.ts
│   │
│   ├── types.ts                   # Common algorithm types
│   ├── index.ts                   # Main algorithms registry
│   └── README.md                  # Algorithms directory documentation
│
├── visualizer/                    # Visualization engine
│   ├── components/                # UI components organized by data structure
│   │   ├── array/                 # Array visualization components
│   │   ├── linked-list/           # Linked list visualization
│   │   ├── tree/                  # Tree visualization
│   │   └── graph/                 # Graph visualization
│   ├── renderers/                 # Rendering engines
│   ├── controls/                  # Play/pause/speed controls
│   └── types.ts
│
├── core/                          # Core utilities
│   ├── types.ts                   # Algorithm interface & core types
│   ├── eventEmitter.ts            # Event system
│   └── algorithmRunner.ts         # Algorithm executor
│
└── app/                           # Main application
    ├── pages/
    ├── layout/
    └── routing/
```

## Benefits of Data Structure Organization

### ✅ **Clear Organization**
- All algorithms for a data structure are grouped together
- Easy to find related algorithms (e.g., all array sorting algorithms)

### ✅ **Better Code Reusability**
- Data structure-specific types are co-located with algorithms
- Shared utilities for a data structure are easier to maintain

### ✅ **Simplified Visualization**
- Visualizer components can mirror the same structure
- Each data structure can have its own visualization style

### ✅ **Easier Navigation**
- Developers can quickly find algorithms by data structure
- Clear separation makes codebase more maintainable

## Example: Finding an Algorithm

**Old Structure (by algorithm type):**
```
algorithms/
├── sorting/
│   └── bubbleSort/      ← Where's the array sorting?
├── searching/
│   └── binarySearch/    ← Where's the array searching?
└── graph/
    └── bfs/             ← Where are other graph algorithms?
```

**New Structure (by data structure):**
```
algorithms/
├── array/
│   ├── sorting/
│   │   └── bubbleSort/  ← Clear: it's an array sorting algorithm
│   └── searching/
│       └── binarySearch/ ← Clear: it's an array searching algorithm
└── graph/
    └── bfs/             ← Clear: it's a graph algorithm
```

## Algorithm Interface

Each algorithm implements:

```typescript
interface Algorithm<T> {
  name: string;                    // Display name
  category: string;                // e.g., 'array-sorting'
  dataStructure: string;           // e.g., 'array', 'tree', 'graph'
  description?: string;
  execute(input: T, options?): Generator<AlgorithmStep>;
  validate?(input: T): boolean;
  getDefaultOptions?(): AlgorithmOptions;
}
```

## Adding a New Algorithm

1. **Identify data structure** → Navigate to `algorithms/{dataStructure}/`
2. **Identify category** → Navigate to `{dataStructure}/{category}/`
3. **Create algorithm** → Create `{algorithmName}/index.ts`
4. **Register** → Add to `{category}/index.ts`
5. **Create visualizer** → Add component in `visualizer/components/{dataStructure}/`

## Registry System

The main registry (`algorithms/index.ts`) provides:
- `allAlgorithms` - All algorithms in one array
- `algorithmsByDataStructure` - Algorithms grouped by data structure
- Helper functions to query algorithms

```typescript
// Get all array algorithms
const arrayAlgos = getAlgorithmsByDataStructure('array');

// Get all sorting algorithms
const sortingAlgos = getAlgorithmsByCategory('array-sorting');
```
