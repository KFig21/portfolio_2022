import React, { useState } from "react";
import ProjectsSC from "./ProjectsSC";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import LanguageIcon from "@mui/icons-material/Language";
import CodeIcon from "@mui/icons-material/Code";
import SC from "../../themes/SC";

export default function HighlightProject({
  project,
  handleDetails,
  setImageModalProject,
  setShowImageModal,
  setImageModalSrc,
}) {
  const [mainImgIndex, setMainImgIndex] = useState(0);

  const handleMainImg = (i) => {
    setImageModalProject(project);
    setImageModalSrc(i);
    setShowImageModal(true);
  };

  // map project technologies
  const mapTech = (techArr) => {
    return techArr.map((tech) => (
      <ProjectsSC.TechWrapper className="tech-wrapper">
        <ProjectsSC.TechContainer className={`${tech.color}`}>
          <ProjectsSC.TechIcon>
            <img src={tech.icon} alt="" />
          </ProjectsSC.TechIcon>
          <ProjectsSC.TechName>{tech.color}</ProjectsSC.TechName>
        </ProjectsSC.TechContainer>
      </ProjectsSC.TechWrapper>
    ));
  };
  return (
    <ProjectsSC.HighlightWrapper>
      {/* LEFT */}
      <ProjectsSC.HighlightLeft className="left">
        {/* TITLE */}
        <ProjectsSC.HighlightTitleContainer className="title-container">
          <ProjectsSC.FaviconContainer className="favicon-container">
            <img src={project.favicon} alt="" />
          </ProjectsSC.FaviconContainer>
          <ProjectsSC.HighlightTitle
            className="title"
            onClick={() => handleDetails(project)}
          >
            {project.title.toUpperCase()}
          </ProjectsSC.HighlightTitle>
          {/* CLOSE DETAILS */}
          <CloseFullscreenIcon
            className="title-icon"
            onClick={() => handleDetails(project)}
          />
          {/* LIVE LINK */}
          <ProjectsSC.ProjectLink
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LanguageIcon className="title-icon" />
          </ProjectsSC.ProjectLink>
          {/* REPO */}
          <ProjectsSC.ProjectLink
            href={project.repository}
            target="_blank"
            rel="noopener noreferrer"
          >
            <CodeIcon className="title-icon code" />
          </ProjectsSC.ProjectLink>
        </ProjectsSC.HighlightTitleContainer>

        {/* DESCRIPTION */}
        <ProjectsSC.HighlightDescContainer className="desc-container">
          <SC.PrimaryColorText>&gt;</SC.PrimaryColorText> {project.desc}
        </ProjectsSC.HighlightDescContainer>

        {/* TECH */}
        <ProjectsSC.HighlightTechContainer>
          {mapTech(project.icons)}
        </ProjectsSC.HighlightTechContainer>

        {/* MOBILE LINKS */}
        <ProjectsSC.MobileLinks>
          {/* LIVE LINK */}
          <ProjectsSC.ProjectLinkMobile
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LanguageIcon className="title-icon" />
          </ProjectsSC.ProjectLinkMobile>
          {/* REPO */}
          <ProjectsSC.ProjectLinkMobile
            href={project.repository}
            target="_blank"
            rel="noopener noreferrer"
          >
            <CodeIcon className="title-icon code" />
          </ProjectsSC.ProjectLinkMobile>
        </ProjectsSC.MobileLinks>
      </ProjectsSC.HighlightLeft>
      {/* RIGHT */}
      <ProjectsSC.HighlightRight className="right">
        <ProjectsSC.HighlightRightInner className="inner">
          <ProjectsSC.GalleryContainer className="gallery">
            {project.imgs.map((img, i) => {
              return (
                <ProjectsSC.GalleryImg onClick={() => handleMainImg(i)}>
                  <img
                    src={img.src}
                    className={`${mainImgIndex === i && "current"}`}
                    alt=""
                  />
                </ProjectsSC.GalleryImg>
              );
            })}
          </ProjectsSC.GalleryContainer>
        </ProjectsSC.HighlightRightInner>
      </ProjectsSC.HighlightRight>
    </ProjectsSC.HighlightWrapper>
  );
}
