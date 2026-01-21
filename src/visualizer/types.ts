/**
 * Visualizer types
 */

export interface RendererConfig {
  width: number;
  height: number;
  padding?: number;
  colors?: {
    default?: string;
    highlight?: string;
    compare?: string;
    swap?: string;
    sorted?: string;
  };
}

export interface VisualizationProps {
  data: any;
  step: any;
  config: RendererConfig;
}
