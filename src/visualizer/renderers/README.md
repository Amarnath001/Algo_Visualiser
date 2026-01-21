# Visualization Renderers

This directory contains different rendering engines for visualizations.

## Renderers

- `canvas/` - Canvas-based renderer
- `svg/` - SVG-based renderer
- `webgl/` - WebGL renderer for complex visualizations

Each renderer should implement a standard interface:
- `render(data, step, config)`
- `clear()`
- `resize(width, height)`
