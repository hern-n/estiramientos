import React from "react";

function VideoCarousel({ videos, current, setCurrent }) {
  const prevVideo = () =>
    setCurrent(current === 0 ? videos.length - 1 : current - 1);
  const nextVideo = () =>
    setCurrent(current === videos.length - 1 ? 0 : current + 1);

  return (
    <div className="video-carousel-container">
      <div className="carousel-content">
        <button
          className="carousel-arrow left-arrow"
          onClick={prevVideo}
          aria-label="Anterior"
        >
          &#8592;
        </button>
        <div className="video-player-container">
          <video
            key={videos[current].src}
            className="video-player"
            src={videos[current].src}
            controls
            autoPlay
            loop
          />
          <div className="video-title">{videos[current].title}</div>
        </div>
        <button
          className="carousel-arrow right-arrow"
          onClick={nextVideo}
          aria-label="Siguiente"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
}

export default VideoCarousel;
