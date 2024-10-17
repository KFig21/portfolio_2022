import React from "react";
import AboutSC from "./AboutSC";
import logo from "../../assets/logo_1.png";
import SC from "../../themes/SC";
import "../../Global.scss";

export default function About() {
  return (
    <AboutSC.AboutPage id="about">
      {/* CORNERS */}
      <SC.PageCorner className="top left"></SC.PageCorner>
      <SC.PageCorner className="top right"></SC.PageCorner>
      <SC.PageCorner className="bottom left"></SC.PageCorner>
      <SC.PageCorner className="bottom right"></SC.PageCorner>
      {/* CONTAINER */}
      <AboutSC.AboutContainer className="about-container">
        <AboutSC.AboutLeft className="about-left">
          <AboutSC.AboutImgContainer className="img-container">
            <AboutSC.AboutImg src={logo} alt="" />
          </AboutSC.AboutImgContainer>
          <AboutSC.AboutTitleMobile href="#about">
            ABOUT ME
          </AboutSC.AboutTitleMobile>
        </AboutSC.AboutLeft>
        <AboutSC.AboutRight className="about-right">
          <AboutSC.AboutTitle href="#about">ABOUT ME</AboutSC.AboutTitle>
          <AboutSC.AboutInfo className="info-p">
            <SC.PrimaryColorText>&gt;</SC.PrimaryColorText> Welcome! My name is
            Kevin Figenshu,  I am a Software Engineer with 2.5 years of professional experience.
          </AboutSC.AboutInfo>
          <AboutSC.AboutInfo className="info-p">
            <SC.PrimaryColorText>&gt;</SC.PrimaryColorText> Starting from
            no-code in January of 2020 I became obsessed with the world of
            programming. Poring through resources such as The Odin Project,
            LeetCode, and Codecademy I developed the necessary skills
            for becoming a full stack developer.
          </AboutSC.AboutInfo>
          <AboutSC.AboutLWT>&gt; Let's work together!</AboutSC.AboutLWT>
        </AboutSC.AboutRight>
      </AboutSC.AboutContainer>
    </AboutSC.AboutPage>
  );
}
