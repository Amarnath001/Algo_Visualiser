import { useState, useEffect, useCallback } from 'react';
import { AlgorithmRunner } from '@core/algorithmRunner';
import { AlgorithmEventEmitter } from '@core/eventEmitter';
import { Algorithm, AlgorithmStep } from '@core/types';

/**
 * Custom React hook for algorithm visualization
 */
export const useAlgorithmVisualization = (speed: number = 1) => {
  const [emitter] = useState(() => new AlgorithmEventEmitter());
  const [runner] = useState(() => new AlgorithmRunner(emitter));
  const [currentStep, setCurrentStep] = useState<AlgorithmStep | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const unsubscribeStep = emitter.on('algorithm:step', (step: AlgorithmStep) => {
      setCurrentStep(step);
    });

    const unsubscribeComplete = emitter.on('algorithm:complete', () => {
      setIsPlaying(false);
      setIsCompleted(true);
    });

    const unsubscribeError = emitter.on('algorithm:error', (err: Error) => {
      setError(err);
      setIsPlaying(false);
    });

    const unsubscribeStop = emitter.on('algorithm:stop', () => {
      setIsPlaying(false);
      setCurrentStep(null);
      setIsCompleted(false);
    });

    return () => {
      unsubscribeStep();
      unsubscribeComplete();
      unsubscribeError();
      unsubscribeStop();
    };
  }, [emitter]);

  const run = useCallback(
    async (algorithm: Algorithm<any>, input: any, options?: any) => {
      setError(null);
      setIsCompleted(false);
      setCurrentStep(null);
      setIsPlaying(true);

      try {
        await runner.run(algorithm, input, options);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error'));
        setIsPlaying(false);
      }
    },
    [runner]
  );

  const pause = useCallback(() => {
    runner.pause();
    setIsPlaying(false);
  }, [runner]);

  const resume = useCallback(() => {
    runner.resume();
    setIsPlaying(true);
  }, [runner]);

  const stop = useCallback(() => {
    runner.stop();
    setCurrentStep(null);
    setIsCompleted(false);
    setError(null);
  }, [runner]);

  return {
    currentStep,
    isPlaying,
    isCompleted,
    error,
    run,
    pause,
    resume,
    stop,
  };
};
