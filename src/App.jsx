import React, { useState } from "react";
import VideoIndex from "./components/VideoIndex";
import VideoCarousel from "./components/VideoCarousel";
import './App.css';

// Importar videos locales
import video1 from './assets/video_estiramiento_1.mp4'
import video2 from './assets/video_estiramiento_2.mp4'
import video3 from './assets/video_estiramiento_3.mp4'
import video4 from './assets/video_estiramiento_4.mp4'
import video5 from './assets/video_estiramiento_5.mp4'
import video6 from './assets/video_estiramiento_6.mp4'
import video7 from './assets/video_estiramiento_7.mp4'
import video8 from './assets/video_estiramiento_8.mp4'
import video9 from './assets/video_estiramiento_9.mp4'
import video10 from './assets/video_estiramiento_10.mp4'
import video11 from './assets/video_estiramiento_11.mp4'
import video12 from './assets/video_estiramiento_12.mp4'

function App() {
  const [current, setCurrent] = useState(0);

  // Array de videos locales
  const videos = [
    { src: video1, title: "Video Estiramiento 1" },
    { src: video2, title: "Video Estiramiento 2" },
    { src: video3, title: "Video Estiramiento 3" },
    { src: video4, title: "Video Estiramiento 4" },
    { src: video5, title: "Video Estiramiento 5" },
    { src: video6, title: "Video Estiramiento 6" },
    { src: video7, title: "Video Estiramiento 7" },
    { src: video8, title: "Video Estiramiento 8" },
    { src: video9, title: "Video Estiramiento 9" },
    { src: video10, title: "Video Estiramiento 10" },
    { src: video11, title: "Video Estiramiento 11" },
    { src: video12, title: "Video Estiramiento 12" }
  ];

  return (
    <div className="app">
      <h1>Videos de Estiramientos de espalda</h1>
      <VideoIndex total={videos.length} onSelect={setCurrent} current={current} />
      <VideoCarousel videos={videos} current={current} setCurrent={setCurrent} />
    </div>
  );
}

export default App;
