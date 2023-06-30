import React from "react";

import "./YoutubeVideo.css";
import { MdKeyboardArrowLeft } from "react-icons/md";

const YouTubeVideo = ({ videoKey, setYoutube }) => {
  const youtubeUrl = `https://www.youtube.com/embed/${videoKey}`;

  return (
    <div className="youtube-video">
      <iframe
        title="YouTube Video"
        src={youtubeUrl}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ width: "100%", height: "95vh" }}
      ></iframe>
      <div className="div-wrapper">
        <div
          className="back-container"
          onClick={() => {
            setYoutube(false);
          }}
        >
          <MdKeyboardArrowLeft className="back-icon" />
        </div>
      </div>
    </div>
  );
};

export default YouTubeVideo;
