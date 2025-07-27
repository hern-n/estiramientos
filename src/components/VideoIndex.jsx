import React from "react";

function VideoIndex({ total, onSelect, current }) {
  // total: número total de videos
  // onSelect: función para cambiar el video actual
  // current: índice del video actual

    return (
        <div className="video-index">
        {Array.from({ length: total }, (_, i) => (
            <button
            key={i}
            className={`video-index-btn${current === i ? " active" : ""}`}
            onClick={() => onSelect(i)}
            aria-label={`Ir al video ${i + 1}`}
            >
            {i + 1}
            </button>
        ))}
        </div>
    );}

export default VideoIndex;
