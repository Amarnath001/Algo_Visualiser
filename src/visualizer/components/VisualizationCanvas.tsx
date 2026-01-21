import React from 'react';
import { ArrayVisualizer } from './array/ArrayVisualizer';
import { getAlgorithmsByDataStructure } from '@algorithms';

interface VisualizationCanvasProps {
  algorithm: string | null;
  step: any;
  speed: number;
}

export const VisualizationCanvas: React.FC<VisualizationCanvasProps> = ({
  algorithm,
  step,
  speed,
}) => {
  if (!algorithm || !step) {
    return (
      <div className="visualization-canvas empty">
        <p>Select an algorithm to visualize</p>
      </div>
    );
  }

  // Determine data structure from algorithm
  const arrayAlgorithms = getAlgorithmsByDataStructure('array');
  const isArrayAlgorithm = arrayAlgorithms.some((alg) => alg.name === algorithm);

  if (isArrayAlgorithm) {
    return <ArrayVisualizer step={step} speed={speed} />;
  }

  // Add other data structure visualizers here
  // if (isTreeAlgorithm) return <TreeVisualizer step={step} speed={speed} />;
  // if (isGraphAlgorithm) return <GraphVisualizer step={step} speed={speed} />;

  return (
    <div className="visualization-canvas">
      <p>Visualization for {algorithm} coming soon</p>
    </div>
  );
};
