import React from "react";
import "./Background.scss";
import backgroundVideo from "./backgroundVideo.mp4";

export default function Background(theme) {
  return (
    <div className="video-container">
      <video autoPlay loop muted className={theme.theme.type}>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
    </div>
  );
}
