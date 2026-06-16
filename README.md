# Estiramientos de Espalda

A React web application that guides users through 12 back stretching exercises with embedded videos. Features a scrollable video index and a carousel-style player. Deployed on Vercel.

## Stack

| Component | Technology |
|-----------|-----------|
| Framework | React 19 |
| Bundler | Vite 7 |
| Language | JSX |
| Linting | ESLint 9 |
| Deploy | Vercel |

## Features

- **12 Guided Stretches**: Curated set of back stretching exercise videos
- **Video Index**: Quick navigation to any exercise
- **Carousel Player**: Sequential playback with next/previous navigation
- **Local Videos**: All videos bundled with the app (no streaming dependency)

## Usage

```bash
npm install        # Install dependencies
npm run dev        # Start dev server (Vite, port 5173)
npm run build      # Production build
npm run preview    # Preview production build
npm run lint       # Run ESLint
```

## Project Structure

```
estiramientos/
├── src/
│   ├── App.jsx                 # Main app with video state management
│   ├── App.css                 # App styles
│   ├── main.jsx                # Entry point
│   ├── components/
│   │   ├── VideoIndex.jsx      # Scrollable exercise list
│   │   ├── VideoCarousel.jsx   # Video navigation carousel
│   │   └── VideoPlayer.jsx     # Individual video player
│   └── assets/                 # 12 MP4 exercise videos
├── api/                        # API routes (Vercel serverless)
├── public/                     # Static assets
└── vite.config.js              # Vite configuration
```

## License

MIT
