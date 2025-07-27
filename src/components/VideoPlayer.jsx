import React from "react";

const VideoPlayer = ({ videoSrc, videoTitle }) => {
  return (
    <div className="video-player-container">
      <video controls autoPlay loop muted className="video-player">
        <source src={videoSrc} type="video/mp4" />
        Tu navegador no soporta la etiqueta de video.
      </video>
      {videoTitle && <h2 className="video-title">{videoTitle}</h2>}
    </div>
  );
};

export default VideoPlayer;
