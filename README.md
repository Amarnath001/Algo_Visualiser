# Algorithm Visualizer

A production-ready algorithm visualizer that separates algorithm implementations from visualization logic.

## 🏗️ Project Structure

Algorithms are organized by **data structure** for better organization and maintainability:

```
src/
├── algorithms/           # Algorithms organized by data structure
│   ├── array/            # Array algorithms (sorting, searching)
│   ├── linked-list/      # Linked list algorithms
│   ├── tree/             # Tree algorithms (traversals, search)
│   ├── graph/            # Graph algorithms (BFS, DFS, etc.)
│   ├── hash-table/       # Hash table algorithms
│   ├── stack/            # Stack algorithms
│   └── queue/            # Queue algorithms
├── visualizer/           # Visualization engine and components
├── core/                 # Core utilities and interfaces
└── app/                  # Main application code
```

See [STRUCTURE.md](./STRUCTURE.md) for detailed structure documentation.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm test
```

## 🎨 Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Framer Motion** - Smooth animations
- **Vite** - Fast build tool

## ✨ Features

- **React Components**: Component-based architecture for maintainability
- **Framer Motion Animations**: Smooth, performant algorithm visualizations
- **Speed Control**: Adjustable animation playback speed
- **Multiple Data Structures**: Array, Tree, Graph, Linked List support
- **Real-time Visualization**: See algorithms execute step-by-step

## 📚 Documentation

- [Development Plan](./PLAN.md) - Detailed architecture and design decisions
- [Roadmap](./ROADMAP.md) - Development timeline and milestones

## 🎯 Features

- **Modular Architecture**: Algorithms and visualizer are completely separated
- **Extensible**: Easy to add new algorithms and visualization modes
- **Type-Safe**: Full TypeScript support
- **Testable**: Isolated algorithm implementations for easy testing

## 📖 Usage

See [PLAN.md](./PLAN.md) for detailed information about:
- Architecture principles
- Algorithm interface specification
- Adding new algorithms
- Visualization system design

## 🛣️ Roadmap

See [ROADMAP.md](./ROADMAP.md) for:
- Development phases
- Milestones
- Feature timeline

## 📝 License

MIT
