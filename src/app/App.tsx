import React from 'react';
import { AlgorithmVisualizer } from '@visualizer/components/AlgorithmVisualizer';
import '@visualizer/styles.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <AlgorithmVisualizer />
    </div>
  );
};

export default App;
