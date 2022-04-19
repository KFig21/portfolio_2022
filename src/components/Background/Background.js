import React from "react";
import "./Background.scss";
// import lightBG from "./lightBG.mp4";
import backgroundVideo from "./pb3.mp4";

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
