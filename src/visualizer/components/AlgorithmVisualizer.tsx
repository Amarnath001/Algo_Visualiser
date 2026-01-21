import React, { useState, useEffect } from 'react';
import { AlgorithmRunner } from '@core/algorithmRunner';
import { AlgorithmEventEmitter } from '@core/eventEmitter';
import { PlaybackControls } from './controls/PlaybackControls';
import { AlgorithmSelector } from './controls/AlgorithmSelector';
import { VisualizationCanvas } from './VisualizationCanvas';
import { allAlgorithms, getAlgorithmsByDataStructure } from '@algorithms';

export const AlgorithmVisualizer: React.FC = () => {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [currentStep, setCurrentStep] = useState<any>(null);
  const [emitter] = useState(() => new AlgorithmEventEmitter());
  const [runner] = useState(() => new AlgorithmRunner(emitter));

  useEffect(() => {
    // Subscribe to algorithm events
    const unsubscribeStep = emitter.on('algorithm:step', (step) => {
      setCurrentStep(step);
    });

    const unsubscribeComplete = emitter.on('algorithm:complete', () => {
      setIsPlaying(false);
    });

    return () => {
      unsubscribeStep();
      unsubscribeComplete();
    };
  }, [emitter]);

  const handleAlgorithmSelect = (algorithmName: string) => {
    setSelectedAlgorithm(algorithmName);
    setCurrentStep(null);
    setIsPlaying(false);
  };

  const handlePlay = async () => {
    if (!selectedAlgorithm) return;

    const algorithm = allAlgorithms.find((alg) => alg.name === selectedAlgorithm);
    if (!algorithm) return;

    setIsPlaying(true);
    // TODO: Get input from user
    const input = { array: [64, 34, 25, 12, 22, 11, 90] };
    
    try {
      await runner.run(algorithm, input);
    } catch (error) {
      console.error('Algorithm execution error:', error);
      setIsPlaying(false);
    }
  };

  const handlePause = () => {
    runner.pause();
    setIsPlaying(false);
  };

  const handleStop = () => {
    runner.stop();
    setIsPlaying(false);
    setCurrentStep(null);
  };

  return (
    <div className="algorithm-visualizer">
      <header className="visualizer-header">
        <h1>Algorithm Visualizer</h1>
      </header>
      
      <div className="visualizer-content">
        <aside className="visualizer-sidebar">
          <AlgorithmSelector
            algorithms={allAlgorithms}
            selected={selectedAlgorithm}
            onSelect={handleAlgorithmSelect}
          />
        </aside>

        <main className="visualizer-main">
          <VisualizationCanvas
            algorithm={selectedAlgorithm}
            step={currentStep}
            speed={speed}
          />

          <PlaybackControls
            isPlaying={isPlaying}
            speed={speed}
            onPlay={handlePlay}
            onPause={handlePause}
            onStop={handleStop}
            onSpeedChange={setSpeed}
          />
        </main>
      </div>
    </div>
  );
};
