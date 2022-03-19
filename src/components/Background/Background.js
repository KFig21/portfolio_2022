import React from "react";
import "./Background.scss";
import lightBG from "./lightBG.mp4";

export default function Background(theme) {
  return (
    <video autoPlay loop muted className={theme.theme.type}>
      <source src={lightBG} type="video/mp4" />
      Your browser does not support HTML5 video.
    </video>
  );
}
