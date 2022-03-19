import React from "react";
import SC from "../../themes/SC";
import SkillsSC from "./SkillsSC";
import "../../Global.scss";
import { languages, techData, otherSkills } from "./SkillsData";

export default function Skills() {
  const mapSkills = (skills) => {
    return skills.map((skill) => (
      <SkillsSC.SkillWrapper
        className={`skill-container ${skill.name.toLowerCase()}`}
      >
        <SkillsSC.ImgContainer
          className={`img-container ${skill.name.toLowerCase()}`}
        >
          <img src={skill.icon} alt="" />
        </SkillsSC.ImgContainer>
        <SkillsSC.SkillInfoContainer className="skill">
          <SkillsSC.SkillName className={`${skill.name.toLowerCase()}`}>
            {skill.name}
          </SkillsSC.SkillName>
          <SkillsSC.SkillExp className={`${skill.name.toLowerCase()}`}>
            {skill.exp} {skill.exp > 1 ? "years" : "year"} exp
          </SkillsSC.SkillExp>
        </SkillsSC.SkillInfoContainer>
      </SkillsSC.SkillWrapper>
    ));
  };

  return (
    <SkillsSC.SkillsPage id="skills">
      {/* CORNERS */}
      <SC.PageCorner className="top left"></SC.PageCorner>
      <SC.PageCorner className="top right"></SC.PageCorner>
      <SC.PageCorner className="bottom left"></SC.PageCorner>
      <SC.PageCorner className="bottom right"></SC.PageCorner>
      {/* CONTAINER */}
      <SkillsSC.SkillsContainer>
        <SkillsSC.SkillsLeft className="left">
          <SkillsSC.SkillsTitle className="title" href="#skills">
            SKILLS
          </SkillsSC.SkillsTitle>
          <SkillsSC.SkillsInfo className="info-p">
            <SC.PrimaryColorText>&gt;</SC.PrimaryColorText> Through my
            programming journey I have learned many languages and technologies
            that I am comfortable with. Programming aside, I have valuable
            skills with other software.
          </SkillsSC.SkillsInfo>
          <SkillsSC.SkillsInfo className="info-p">
            <SC.PrimaryColorText>&gt;</SC.PrimaryColorText> Continuous
            improvement is important to me. Although I am proficient in certain
            languages and frameworks I will continue to learn and add to my
            skillset.
          </SkillsSC.SkillsInfo>
        </SkillsSC.SkillsLeft>
        <SkillsSC.SkillsRight className="right">
          <SkillsSC.TitleHover href="#skills"></SkillsSC.TitleHover>
          {/* LANGUAGES */}
          <SkillsSC.SectionContainer className="section-container">
            <SkillsSC.SectionTitle className="section-title languages">
              LANGUAGES
            </SkillsSC.SectionTitle>
            <SkillsSC.SkillsGrid className="section-container">
              {mapSkills(languages)}
            </SkillsSC.SkillsGrid>
          </SkillsSC.SectionContainer>
          {/* TECHNOLOGIES */}
          <SkillsSC.SectionContainer className="section-container">
            <SkillsSC.SectionTitle className="section-title technologies">
              TECHNOLOGIES
            </SkillsSC.SectionTitle>
            <SkillsSC.SkillsGrid className="section-container">
              {mapSkills(techData)}
            </SkillsSC.SkillsGrid>
          </SkillsSC.SectionContainer>
          {/* OTHER SOFTWARE */}
          <SkillsSC.SectionContainer className="section-container">
            <SkillsSC.SectionTitle className="section-title other">
              OTHER SOFTWARE
            </SkillsSC.SectionTitle>
            <SkillsSC.SkillsGrid className="section-container">
              {mapSkills(otherSkills)}
            </SkillsSC.SkillsGrid>
          </SkillsSC.SectionContainer>
        </SkillsSC.SkillsRight>
      </SkillsSC.SkillsContainer>
    </SkillsSC.SkillsPage>
  );
}
