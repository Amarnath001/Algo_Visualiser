/**
 * Event Emitter for algorithm visualization
 * Handles communication between algorithms and visualizer
 */

type EventCallback = (...args: any[]) => void;

export class AlgorithmEventEmitter {
  private events: Map<string, EventCallback[]> = new Map();

  /**
   * Subscribe to an event
   */
  on(event: string, callback: EventCallback): () => void {
    if (!this.events.has(event)) {
      this.events.set(event, []);
    }
    this.events.get(event)!.push(callback);

    // Return unsubscribe function
    return () => {
      const callbacks = this.events.get(event);
      if (callbacks) {
        const index = callbacks.indexOf(callback);
        if (index > -1) {
          callbacks.splice(index, 1);
        }
      }
    };
  }

  /**
   * Emit an event
   */
  emit(event: string, ...args: any[]): void {
    const callbacks = this.events.get(event);
    if (callbacks) {
      callbacks.forEach((callback) => callback(...args));
    }
  }

  /**
   * Remove all listeners for an event
   */
  off(event: string): void {
    this.events.delete(event);
  }

  /**
   * Remove all listeners
   */
  clear(): void {
    this.events.clear();
  }
}
