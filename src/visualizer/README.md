# Visualizer Components

This directory contains React components with Framer Motion animations for visualizing algorithms.

## Structure

```
visualizer/
├── components/          # React visualization components
│   ├── array/          # Array visualization (sorting, searching)
│   ├── tree/           # Tree visualization
│   ├── graph/          # Graph visualization
│   ├── linked-list/    # Linked list visualization
│   ├── controls/       # UI controls (playback, selector)
│   └── VisualizationCanvas.tsx
├── hooks/              # Custom React hooks
│   └── useAlgorithmVisualization.ts
├── styles.css          # Global visualizer styles
└── types.ts            # Visualizer types
```

## React + Framer Motion

### Why Framer Motion?

- **Smooth Animations**: Declarative API for complex animations
- **Performance**: Optimized animations with GPU acceleration
- **Flexible**: Easy to control animation speed, duration, and easing
- **Layout Animations**: Automatic layout transitions for arrays/bars
- **AnimatePresence**: Smooth enter/exit animations for steps

### Example: Array Visualizer

```tsx
import { motion, AnimatePresence } from 'framer-motion';

export const ArrayVisualizer: React.FC<{ step: any; speed: number }> = ({ step, speed }) => {
  const array = step.data.array;
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={step.type}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {array.map((value, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.8 }}
            animate={{ 
              scale: 1,
              backgroundColor: getBarColor(index),
              height: `${(value / maxValue) * 100}%`,
            }}
            transition={{
              duration: 0.5 / speed,  // Speed-controlled animation
              type: 'spring',
              stiffness: 300,
            }}
          >
            {value}
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
```

## Custom Hook: useAlgorithmVisualization

A React hook that manages algorithm execution and state:

```tsx
import { useAlgorithmVisualization } from '@visualizer/hooks';

const {
  currentStep,    // Current algorithm step
  isPlaying,      // Playback state
  isCompleted,    // Algorithm completed
  error,          // Error state
  run,            // Start algorithm
  pause,          // Pause execution
  resume,         // Resume execution
  stop,           // Stop execution
} = useAlgorithmVisualization(speed);
```

## Creating a New Visualizer

### 1. Create Component

Create a component in the appropriate data structure folder:

```tsx
// src/visualizer/components/tree/TreeVisualizer.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface TreeVisualizerProps {
  step: any;
  speed: number;
}

export const TreeVisualizer: React.FC<TreeVisualizerProps> = ({ step, speed }) => {
  // Your visualization logic with Framer Motion
  return (
    <motion.div
      animate={{ /* animation props */ }}
      transition={{ duration: 1 / speed }}
    >
      {/* Tree visualization */}
    </motion.div>
  );
};
```

### 2. Register in VisualizationCanvas

Add your visualizer to `VisualizationCanvas.tsx`:

```tsx
const isTreeAlgorithm = treeAlgorithms.some(alg => alg.name === algorithm);
if (isTreeAlgorithm) {
  return <TreeVisualizer step={step} speed={speed} />;
}
```

### 3. Export Component

Export from the component's index file:

```tsx
// src/visualizer/components/tree/index.ts
export { TreeVisualizer } from './TreeVisualizer';
```

## Animation Best Practices

### 1. Speed Control

Always use `speed` prop to control animation duration:

```tsx
transition={{ duration: 0.5 / speed }}
```

### 2. Spring Animations

Use spring animations for natural movement:

```tsx
transition={{
  type: 'spring',
  stiffness: 300,
  damping: 30,
}}
```

### 3. Layout Animations

Use layout animations for automatic transitions:

```tsx
<motion.div layout>
  {/* Content that changes layout */}
</motion.div>
```

### 4. Color Transitions

Animate color changes smoothly:

```tsx
animate={{
  backgroundColor: isHighlighted ? '#ff4757' : '#5352ed',
}}
transition={{ duration: 0.3 }}
```

### 5. Key Management

Use proper keys for AnimatePresence:

```tsx
<AnimatePresence mode="wait">
  <motion.div key={step.type}>
    {/* Content */}
  </motion.div>
</AnimatePresence>
```

## Controls

### PlaybackControls

Controls for playing, pausing, and stopping algorithms with speed control.

### AlgorithmSelector

Sidebar component for selecting algorithms, organized by data structure.

## Styling

Global styles are in `styles.css`. Component-specific styles can be added inline or via CSS modules.

## Performance Tips

1. **Use keys properly**: Help React identify which elements changed
2. **Limit re-renders**: Use React.memo for expensive components
3. **Debounce animations**: For rapid step changes
4. **Optimize Framer Motion**: Use `layout` prop for automatic animations
5. **Lazy loading**: Load visualizer components on demand
