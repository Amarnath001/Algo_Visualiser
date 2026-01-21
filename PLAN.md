# Algorithm Visualizer - Development Plan

## Project Overview
A production-ready algorithm visualizer that separates algorithm implementations from visualization logic, enabling easy addition of new algorithms and maintainable codebase.

## Architecture Principles

### 1. **Separation of Concerns**
- **Algorithms** (`src/algorithms/`): Pure algorithm implementations with no UI dependencies
- **Visualizer** (`src/visualizer/`): Visualization engine that renders algorithm execution
- **Core** (`src/core/`): Shared utilities, types, and interfaces

### 2. **Modularity**
- Each algorithm is self-contained with its own directory
- Standardized interfaces for all algorithms
- Pluggable visualization components

### 3. **Extensibility**
- Easy to add new algorithms
- Easy to add new visualization modes
- Configurable algorithm parameters

## File Structure

```
Algo_Visualiser/
├── src/
│   ├── algorithms/           # Algorithm implementations organized by data structure
│   │   ├── array/            # Array-based algorithms
│   │   │   ├── sorting/
│   │   │   │   ├── bubbleSort/
│   │   │   │   ├── quickSort/
│   │   │   │   ├── mergeSort/
│   │   │   │   ├── selectionSort/
│   │   │   │   └── index.ts
│   │   │   ├── searching/
│   │   │   │   ├── linearSearch/
│   │   │   │   ├── binarySearch/
│   │   │   │   └── index.ts
│   │   │   ├── other/
│   │   │   │   ├── twoPointers/
│   │   │   │   └── slidingWindow/
│   │   │   └── index.ts
│   │   ├── linked-list/      # Linked list algorithms
│   │   │   ├── reverse/
│   │   │   ├── merge/
│   │   │   ├── detectCycle/
│   │   │   └── index.ts
│   │   ├── tree/             # Tree algorithms
│   │   │   ├── traversal/
│   │   │   │   ├── inorder/
│   │   │   │   ├── preorder/
│   │   │   │   ├── postorder/
│   │   │   │   └── levelOrder/
│   │   │   ├── search/
│   │   │   │   └── binarySearchTree/
│   │   │   └── index.ts
│   │   ├── graph/            # Graph algorithms
│   │   │   ├── bfs/
│   │   │   ├── dfs/
│   │   │   ├── dijkstra/
│   │   │   ├── aStar/
│   │   │   ├── kruskal/
│   │   │   └── index.ts
│   │   ├── hash-table/       # Hash table algorithms
│   │   │   ├── collisionHandling/
│   │   │   └── index.ts
│   │   ├── stack/            # Stack algorithms
│   │   │   ├── validParentheses/
│   │   │   └── index.ts
│   │   ├── queue/            # Queue algorithms
│   │   │   └── index.ts
│   │   └── types.ts          # Common algorithm types
│   ├── visualizer/           # Visualization engine
│   │   ├── components/       # React/Vue/vanilla components
│   │   ├── renderers/        # Different rendering modes
│   │   ├── controls/         # UI controls (play, pause, speed)
│   │   ├── hooks/            # Custom hooks (if using React)
│   │   └── utils/            # Visualization utilities
│   ├── core/                 # Core utilities
│   │   ├── eventEmitter.ts   # Event system for algorithm steps
│   │   ├── algorithmRunner.ts # Runs algorithms with visualization
│   │   └── types.ts          # Core types and interfaces
│   ├── app/                  # Main application
│   │   ├── pages/
│   │   ├── layout/
│   │   └── routing/
│   └── utils/                # General utilities
├── public/                   # Static assets
├── tests/                    # Test files
│   ├── algorithms/
│   └── visualizer/
├── docs/                     # Documentation
│   ├── algorithms/
│   └── architecture.md
├── config/                   # Configuration files
└── dist/                     # Build output (gitignored)
```

## Algorithm Interface

All algorithms must implement a standard interface:

```typescript
interface AlgorithmStep {
  type: string;
  data: any;
  description?: string;
}

interface AlgorithmResult {
  steps: AlgorithmStep[];
  result: any;
  complexity: {
    time: string;
    space: string;
  };
}

interface Algorithm {
  name: string;
  category: string;
  execute(input: any, options?: any): Generator<AlgorithmStep>;
  validate?(input: any): boolean;
}
```

## Visualization System (React + Framer Motion)

### Core Components:
1. **React Components**: Reusable visualization components for each data structure
2. **Framer Motion Animations**: Smooth, performant animations for algorithm steps
3. **Animation Controller**: Manages playback speed, pause/resume
4. **Step Navigator**: Allows jumping to specific steps
5. **Parameter Controls**: Input forms for algorithm parameters
6. **Stats Display**: Shows complexity, execution time, comparisons

### Visualization Components:
- **ArrayVisualizer**: Animated bars for array-based algorithms (sorting, searching)
- **TreeVisualizer**: Tree structure visualization for tree algorithms
- **GraphVisualizer**: Interactive graph visualization for graph algorithms
- **LinkedListVisualizer**: Node-based visualization for linked list algorithms

### Animation Features:
- **Framer Motion** provides:
  - Smooth color transitions for highlighting
  - Spring animations for movements
  - Layout animations for array bars
  - AnimatePresence for enter/exit animations
  - Speed-controlled animations based on playback speed

### Visualization Modes:
- Step-by-step animation with Framer Motion
- Real-time rendering with optimized performance
- Comparison mode (multiple algorithms side-by-side)

## Technology Stack

### Frontend:
- **React 18** - UI library for component-based architecture
- **TypeScript** - Type-safe JavaScript
- **Framer Motion** - Animation library for smooth algorithm visualizations
- **Vite** - Fast, modern build tool with HMR

### Animation:
- **Framer Motion** - Declarative animations for:
  - Smooth transitions between algorithm steps
  - Color changes and highlighting
  - Bar/slot animations for sorting/searching
  - Graph node and edge animations

### Testing:
- **Vitest** - Unit tests
- **@testing-library/react** - React component testing
- **Playwright** or **Cypress** (E2E tests - future)

### Styling:
- **CSS Modules** / **Plain CSS** - Custom styling
- Responsive design with Flexbox/Grid

## Development Guidelines

### Adding a New Algorithm:
1. Identify the data structure the algorithm works with
2. Create directory in `src/algorithms/{dataStructure}/{algorithmType}/{algorithmName}/`
   - Example: `src/algorithms/array/sorting/bubbleSort/`
   - Example: `src/algorithms/tree/traversal/inorder/`
3. Implement the Algorithm interface
4. Create index.ts exporting the algorithm
5. Write tests in `tests/algorithms/{dataStructure}/{algorithmType}/{algorithmName}/`
6. Create visualization component in `src/visualizer/components/{dataStructure}/{algorithmName}/`
7. Register in the appropriate data structure registry

### Adding Visualization:
1. Create renderer in `src/visualizer/renderers/{algorithmType}/`
2. Handle algorithm steps via event emitter
3. Implement animation logic
4. Add controls for user interaction

## Key Features to Implement

### Phase 1 (MVP):
- [ ] 3-5 sorting algorithms
- [ ] Basic visualization (bars/array representation)
- [ ] Play/pause/step controls
- [ ] Speed control

### Phase 2:
- [ ] Searching algorithms
- [ ] Graph algorithms
- [ ] Multiple visualization modes
- [ ] Algorithm comparison

### Phase 3:
- [ ] Export visualizations
- [ ] Custom input generation
- [ ] Performance metrics
- [ ] Educational tooltips

### Phase 4 (Production):
- [ ] Accessibility features
- [ ] Mobile responsiveness
- [ ] Performance optimization
- [ ] Comprehensive documentation
