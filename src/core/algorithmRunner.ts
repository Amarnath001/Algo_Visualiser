/**
 * Algorithm Runner
 * Executes algorithms and emits steps for visualization
 */

import { Algorithm, AlgorithmStep } from './types';
import { AlgorithmEventEmitter } from './eventEmitter';

export class AlgorithmRunner {
  private emitter: AlgorithmEventEmitter;
  private isRunning: boolean = false;
  private currentGenerator: Generator<AlgorithmStep> | null = null;

  constructor(emitter: AlgorithmEventEmitter) {
    this.emitter = emitter;
  }

  /**
   * Run an algorithm with visualization
   */
  async run<T>(
    algorithm: Algorithm<T>,
    input: T,
    options?: any
  ): Promise<void> {
    if (this.isRunning) {
      throw new Error('Algorithm is already running');
    }

    this.isRunning = true;
    this.emitter.emit('algorithm:start', { algorithm: algorithm.name, input });

    try {
      const generator = algorithm.execute(input, options);
      this.currentGenerator = generator;
      const steps: AlgorithmStep[] = [];

      for (const step of generator) {
        if (!this.isRunning) {
          break;
        }
        steps.push(step);
        this.emitter.emit('algorithm:step', step);
        await this.delay(0); // Yield to allow UI updates
      }

      const result = generator.next().value || steps[steps.length - 1]?.data;
      this.emitter.emit('algorithm:complete', { steps, result });
    } catch (error) {
      this.emitter.emit('algorithm:error', error);
      throw error;
    } finally {
      this.isRunning = false;
      this.currentGenerator = null;
    }
  }

  /**
   * Stop the current algorithm execution
   */
  stop(): void {
    this.isRunning = false;
    this.emitter.emit('algorithm:stop');
  }

  /**
   * Pause the algorithm execution
   */
  pause(): void {
    this.isRunning = false;
    this.emitter.emit('algorithm:pause');
  }

  /**
   * Resume the algorithm execution
   */
  resume(): void {
    if (this.currentGenerator && !this.isRunning) {
      this.isRunning = true;
      this.emitter.emit('algorithm:resume');
    }
  }

  /**
   * Check if algorithm is currently running
   */
  getRunning(): boolean {
    return this.isRunning;
  }

  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
