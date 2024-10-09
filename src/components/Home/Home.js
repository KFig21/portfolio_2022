import React, { useEffect, useRef } from "react";
import HomeSC from "./HomeSC";
import { init } from "ityped";
import "../../Global.scss";
import SC from "../../themes/SC";

export default function Home(theme) {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 2000,
      backSpeed: 60,
      strings: ["Developer", "Designer", "Engineer"],
    });
  }, []);

  return (
    <HomeSC.HomeContainer id="home">
      {/* CORNERS */}
      <SC.PageCorner className="top left"></SC.PageCorner>
      <SC.PageCorner className="top right"></SC.PageCorner>
      <SC.PageCorner className="bottom left"></SC.PageCorner>
      <SC.PageCorner className="bottom right"></SC.PageCorner>
      {/* CONTENT */}
      <HomeSC.HomeTitle style={{fontWeight: '900'}}>KEVIN FIGENSHU</HomeSC.HomeTitle>
      <HomeSC.HomeSubtextContainer>
        <HomeSC.HomeSubtextWrapper>
          <HomeSC.HomeSubtext className="cursor"> &gt; </HomeSC.HomeSubtext>
          <HomeSC.HomeSubtext className="text" ref={textRef}>
            {" "}
          </HomeSC.HomeSubtext>
        </HomeSC.HomeSubtextWrapper>
      </HomeSC.HomeSubtextContainer>
    </HomeSC.HomeContainer>
  );
}
