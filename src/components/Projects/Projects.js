import React, { useState } from "react";
import ProjectsSC from "./ProjectsSC";
import SC from "../../themes/SC";
import {
  nodebookProjectData,
  applifyProjectData,
  petstagramProjectData,
  gameNseekProjectData,
} from "./ProjectsData";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import LanguageIcon from "@mui/icons-material/Language";
import CodeIcon from "@mui/icons-material/Code";
import HighlightProject from "./HighlightProject";

export default function Projects() {
  const _projects = [
    nodebookProjectData,
    applifyProjectData,
    petstagramProjectData,
    gameNseekProjectData,
  ];
  const [active, setActive] = useState(false);
  // true: all projects, false: single project
  const [content, setContent] = useState(true);
  const [proj, setProj] = useState({});

  const handleDetails = (project) => {
    setActive(true);
    setProj(project);
    setTimeout(() => {
      setActive(false);
      setContent(!content);
    }, 800);
  };

  // all projects
  const mapProjects = (projects) => {
    return projects.map((project) => (
      <ProjectsSC.ProjectWrapper className={active ? "close" : "open"}>
        <ProjectsSC.ImgContainer>
          <img src={project.favicon} alt="" />
        </ProjectsSC.ImgContainer>
        <ProjectsSC.ProjectInfo className="project-info">
          <ProjectsSC.ProjectTitleContainer className="project-title-container">
            <ProjectsSC.ProjectTitle onClick={() => handleDetails(project)}>
              {project.title.toUpperCase()}
            </ProjectsSC.ProjectTitle>
            <ProjectsSC.IconsContainer>
              {/* VIEW DETAILS */}
              <ProjectsSC.ProjectLink href="#projects">
                <OpenInFullIcon
                  className="title-icon"
                  onClick={() => handleDetails(project)}
                />
              </ProjectsSC.ProjectLink>
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
            </ProjectsSC.IconsContainer>
          </ProjectsSC.ProjectTitleContainer>
          <ProjectsSC.ProjectDetail>
            <SC.PrimaryColorText>&gt;</SC.PrimaryColorText> {project.preview}
          </ProjectsSC.ProjectDetail>
        </ProjectsSC.ProjectInfo>
      </ProjectsSC.ProjectWrapper>
    ));
  };

  return (
    <ProjectsSC.ProjectsPage id="projects">
      {/* CORNERS */}
      <SC.PageCorner className="top left"></SC.PageCorner>
      <SC.PageCorner className="top right"></SC.PageCorner>
      <SC.PageCorner className="bottom left"></SC.PageCorner>
      <SC.PageCorner className="bottom right"></SC.PageCorner>
      {/* CONTAINER */}
      <ProjectsSC.ProjectsContainer id="projects">
        <ProjectsSC.ProjectsTop>
          <ProjectsSC.ProjectsTitle href="#projects">
            PROJECTS
          </ProjectsSC.ProjectsTitle>
          <ProjectsSC.ProjectsTitleMobile href="#projects">
            {content ? (
              "PROJECTS"
            ) : (
              <ProjectsSC.HighlightTitleContainerMobile className="title-container">
                <ProjectsSC.FaviconContainer className="favicon-container">
                  <img src={proj.favicon} alt="" />
                </ProjectsSC.FaviconContainer>
                <ProjectsSC.HighlightTitleMobile className="title">
                  {proj.title.toUpperCase()}
                </ProjectsSC.HighlightTitleMobile>
                {/* CLOSE DETAILS */}
                <CloseFullscreenIcon
                  className="title-icon"
                  onClick={() => handleDetails(proj)}
                />
              </ProjectsSC.HighlightTitleContainerMobile>
            )}
          </ProjectsSC.ProjectsTitleMobile>
          {/* LEGEND */}
          <ProjectsSC.ProjectsLegend>
            {/* EXPAND / CLOSE */}
            {content ? (
              <ProjectsSC.ProjectsLegendIconContainer>
                <OpenInFullIcon className="icon" /> expand details
              </ProjectsSC.ProjectsLegendIconContainer>
            ) : (
              <ProjectsSC.ProjectsLegendIconContainer
                className="legend-link"
                onClick={() => handleDetails(proj)}
              >
                <CloseFullscreenIcon className="icon" /> close details
              </ProjectsSC.ProjectsLegendIconContainer>
            )}
            {/* URL */}
            <ProjectsSC.ProjectsLegendIconContainer>
              {content ? (
                <>
                  <LanguageIcon className="icon" /> live url
                </>
              ) : (
                <ProjectsSC.ProjectLink
                  href={proj.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="legend-link"
                >
                  <LanguageIcon className="icon" /> live url
                </ProjectsSC.ProjectLink>
              )}
            </ProjectsSC.ProjectsLegendIconContainer>
            {/* REPO */}
            <ProjectsSC.ProjectsLegendIconContainer>
              {content ? (
                <>
                  <CodeIcon className="icon" /> code repo
                </>
              ) : (
                <ProjectsSC.ProjectLink
                  href={proj.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="legend-link"
                >
                  <CodeIcon className="icon" /> code repo
                </ProjectsSC.ProjectLink>
              )}
            </ProjectsSC.ProjectsLegendIconContainer>
          </ProjectsSC.ProjectsLegend>
        </ProjectsSC.ProjectsTop>
        <ProjectsSC.ProjectsBottom
          className={`${active ? "close" : "open"} ${
            content ? "all" : "highlight"
          }`}
        >
          {content && <>{mapProjects(_projects)} </>}
          {!content && (
            <HighlightProject project={proj} handleDetails={handleDetails} />
          )}
        </ProjectsSC.ProjectsBottom>
      </ProjectsSC.ProjectsContainer>
    </ProjectsSC.ProjectsPage>
  );
}
