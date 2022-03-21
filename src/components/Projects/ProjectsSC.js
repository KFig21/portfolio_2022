import styled from "styled-components";

import {
  navHeight,
  javascriptColor,
  htmlColor,
  cssColor,
  sqlColor,
  mongoColor,
  expressColor,
  reactColor,
  nodeColor,
  styled_componentsColor,
  mysqlColor,
  awsColor,
  sassColor,
  photoshopColor,
  illustratorColor,
  excelColor,
  firebaseColor,
  herokuColor,
  jwtColor,
  reduxColor,
  tailwindColor,
  mobileWidthMax,
  mobileHeightMin,
  desktopWidthMin,
  mobileKeyboardHeightMax,
} from "../../themes/SC";

const notch = "60px";
const notchMobile = "40px";
const highlightNotch = "50px";
const highlightInnerNotch = "43px";
const projectNotch = "20px";
const techNotch = "6px";

const HighlightGalleryContainerHeight = "100%";
const projImgContainerWidth = "160px";
const projImgContainerWidthMobile = "85px";
const projFavContainerWidth = "40px";
const techIconContainerWidth = "24px";
const techIconWidth = "16px";

const ProjectsSC = {
  ProjectsPage: styled.div`
    background-color: ${(props) => props.theme.colors.backgroundColor};

    width: 100vw;
    min-height: 100vh;
    max-height: 100vh;
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    @media (max-height: ${mobileKeyboardHeightMax}) {
      @media (max-width: ${mobileWidthMax}) {
        display: none;
      }
    }
  `,
  ProjectsContainer: styled.div`
    background-color: ${(props) => props.theme.colors.ContainerBgColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    z-index: 2;
    max-width: 80%;
    margin-top: calc(${navHeight} / 2);

    -webkit-clip-path: polygon(
      ${notch} 0%,
      100% 0,
      100% calc(100% - ${notch}),
      calc(100% - ${notch}) 100%,
      0 100%,
      0% ${notch}
    );
    clip-path: polygon(
      ${notch} 0%,
      100% 0,
      100% calc(100% - ${notch}),
      calc(100% - ${notch}) 100%,
      0 100%,
      0% ${notch}
    );

    @media (min-height: ${mobileHeightMin}) {
      @media (max-width: ${mobileWidthMax}) {
        min-width: 80%;

        -webkit-clip-path: polygon(
          ${notchMobile} 0%,
          100% 0,
          100% calc(100% - ${notchMobile}),
          calc(100% - ${notchMobile}) 100%,
          0 100%,
          0% ${notchMobile}
        );
        clip-path: polygon(
          ${notchMobile} 0%,
          100% 0,
          100% calc(100% - ${notchMobile}),
          calc(100% - ${notchMobile}) 100%,
          0 100%,
          0% ${notchMobile}
        );
      }
    }
  `,

  // top
  ProjectsTop: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    width: 100%;
    position: relative;
    background-color: ${(props) => props.theme.colors.ContainerBgColor2};

    z-index: 4;
  `,
  ProjectsTitle: styled.a`
    color: ${(props) => props.theme.colors.textOnContainerColor};
    font-size: 70px;
    font-weight: 900;
    letter-spacing: 1px;
    font-family: din-condensed, sans-serif;
    font-style: italic;
    text-decoration: underline solid 7px
      ${(props) => props.theme.colors.primaryColor};
    text-underline-offset: 5px;
    margin-bottom: 10px;

    z-index: 4;

    @media (min-height: ${mobileHeightMin}) {
      @media (max-width: ${mobileWidthMax}) {
        display: none;
      }
    }
  `,
  ProjectsTitleMobile: styled.a`
    color: ${(props) => props.theme.colors.textOnContainerColor};

    font-weight: 900;
    letter-spacing: 1px;
    font-family: din-condensed, sans-serif;
    font-style: italic;
    font-size: 50px;
    min-height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-underline-offset: 4px;
    margin-bottom: 6px;
    text-decoration: underline solid 5px
      ${(props) => props.theme.colors.primaryColor};

    display: none;

    z-index: 4;

    @media (min-height: ${mobileHeightMin}) {
      @media (max-width: ${mobileWidthMax}) {
        display: flex;
      }
    }
  `,
  ProjectsLegend: styled.div`
    position: absolute;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    right: 30px;
    min-width: 136px;
    color: ${(props) => props.theme.colors.subtextOnContainerColor};

    .legend-link {
      color: ${(props) => props.theme.colors.subtextOnContainerColor};
      text-decoration: none;
      transition: all ease 0.2s;

      &:hover {
        color: ${(props) => props.theme.colors.primaryColor};
        opacity: 1;
        cursor: pointer;
      }
    }

    @media (min-height: ${mobileHeightMin}) {
      @media (max-width: ${mobileWidthMax}) {
        display: none;
      }
    }
  `,
  ProjectsLegendIconContainer: styled.div`
    margin: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: din-2014, sans-serif;

    .icon {
      margin-right: 5px;
    }
  `,

  // bottom
  ProjectsBottom: styled.div`
    padding: 10px 25px 25px 25px;
    background-color: ${(props) => props.theme.colors.ContainerBgColor};
    color: ${(props) => props.theme.colors.textOnContainerColor};
    z-index: 3;
    transition: all linear 0.4s;

    &.all {
      display: grid;
      grid-template-columns: 1fr 1fr;

      @media (min-height: ${mobileHeightMin}) {
        @media (max-width: ${mobileWidthMax}) {
          grid-template-columns: 1fr;
          padding: 10px;
          width: 100%;
          min-width: 100%;
        }
      }
    }

    &.highlight {
      display: flex;
      padding: 10px 0px 20px 15px;
    }

    // animation
    &.open {
      transform: translateY(0px);
      height: 415px;

      @media (min-height: ${mobileHeightMin}) {
        @media (max-width: ${mobileWidthMax}) {
          height: 445px;
        }
      }
    }

    &.close {
      transform: translateY(-500px);
      height: 0px;
      padding: 0px 25px;
    }
  `,
  ProjectWrapper: styled.div`
    display: flex;
    margin: 15px;
    background-color: ${(props) => props.theme.colors.ContainerBgColor2};
    transition: all ease 0.2s;
    cursor: pointer;

    @media (min-height: ${mobileHeightMin}) {
      @media (max-width: ${mobileWidthMax}) {
        margin: 10px;
      }
    }

    -webkit-clip-path: polygon(
      ${projectNotch} 0%,
      100% 0,
      100% ${projectNotch},
      100% calc(100% - ${projectNotch}),
      calc(100% - ${projectNotch}) 100%,
      0 100%,
      0% calc(100% - ${projectNotch}),
      0% ${projectNotch}
    );
    clip-path: polygon(
      ${projectNotch} 0%,
      100% 0,
      100% ${projectNotch},
      100% calc(100% - ${projectNotch}),
      calc(100% - ${projectNotch}) 100%,
      0 100%,
      0% calc(100% - ${projectNotch}),
      0% ${projectNotch}
    );

    @media (min-height: ${mobileHeightMin}) {
      @media (min-width: ${desktopWidthMin}) {
        &:hover {
          -webkit-clip-path: polygon(
            0 0,
            calc(100% - ${projectNotch}) 0,
            100% ${projectNotch},
            100% calc(100% - ${projectNotch}),
            100% 100%,
            ${projectNotch} 100%,
            0% calc(100% - ${projectNotch}),
            0% ${projectNotch}
          );
          clip-path: polygon(
            0 0,
            calc(100% - ${projectNotch}) 0,
            100% ${projectNotch},
            100% calc(100% - ${projectNotch}),
            100% 100%,
            ${projectNotch} 100%,
            0% calc(100% - ${projectNotch}),
            0% ${projectNotch}
          );
        }
      }
    }
  `,
  ImgContainer: styled.div`
    min-width: ${projImgContainerWidth};
    max-width: ${projImgContainerWidth};
    min-height: ${projImgContainerWidth};
    max-height: ${projImgContainerWidth};

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      min-width: ${projImgContainerWidth};
      max-width: ${projImgContainerWidth};
      min-height: ${projImgContainerWidth};
      max-height: ${projImgContainerWidth};
    }

    @media (min-height: ${mobileHeightMin}) {
      @media (max-width: ${mobileWidthMax}) {
        min-width: ${projImgContainerWidthMobile};
        max-width: ${projImgContainerWidthMobile};
        min-height: ${projImgContainerWidthMobile};
        max-height: ${projImgContainerWidthMobile};

        img {
          min-width: ${projImgContainerWidthMobile};
          max-width: ${projImgContainerWidthMobile};
          min-height: ${projImgContainerWidthMobile};
          max-height: ${projImgContainerWidthMobile};
        }
      }
    }
  `,
  ProjectInfo: styled.div`
    display: flex;
    flex-direction: column;
    padding: 5px 5px 5px 10px;
    max-height: ${projImgContainerWidth};

    @media (min-height: ${mobileHeightMin}) {
      @media (max-width: ${mobileWidthMax}) {
        align-items: center;
        justify-content: center;
        width: 100%;
      }
    }
  `,
  ProjectTitleContainer: styled.div`
    display: flex;
    align-items: center;

    .title-icon {
      color: ${(props) => props.theme.colors.subtextOnContainerColor};
      margin-left: 7px;
      padding: 2px;
      transition: all ease 0.2s;
      opacity: 0.8;

      &.code {
        margin-left: 8px;
      }

      &:hover {
        color: ${(props) => props.theme.colors.primaryColor};
        opacity: 1;
      }
    }

    @media (min-height: ${mobileHeightMin}) {
      @media (max-width: ${mobileWidthMax}) {
        flex-direction: column;
        width: 100%;
      }
    }
  `,
  ProjectTitle: styled.span`
    font-size: 28px;
    font-weight: 700;
    letter-spacing: 1px;
    font-family: din-condensed, sans-serif;
    font-style: italic;
    text-decoration: underline solid 3.5px
      ${(props) => props.theme.colors.primaryColor};
    text-underline-offset: 2.5px;

    @media (min-height: ${mobileHeightMin}) {
      @media (max-width: ${mobileWidthMax}) {
        font-size: 30px;
        text-decoration: none;
        width: 100%;
        margin-bottom: 6px;
      }
    }
  `,
  IconsContainer: styled.div`
    display: flex;
    @media (min-height: ${mobileHeightMin}) {
      @media (max-width: ${mobileWidthMax}) {
        width: 100%;
        justify-content: space-evenly;
      }
    }
  `,
  ProjectLink: styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  ProjectLinkMobile: styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.colors.subtextOnContainerColor};
  `,
  ProjectDetail: styled.span`
    font-size: 17px;
    font-weight: 600;
    font-family: din-2014, sans-serif;
    letter-spacing: 0.5px;
    padding: 10px;

    z-index: 2;

    @media (min-height: ${mobileHeightMin}) {
      @media (max-width: ${mobileWidthMax}) {
        display: none;
      }
    }
  `,
  // highlight project
  HighlightWrapper: styled.div`
    display: flex;

    @media (min-height: ${mobileHeightMin}) {
      @media (max-width: ${mobileWidthMax}) {
        flex-direction: column;
        padding-right: 25px;

        overflow-y: overlay;
        ::-webkit-scrollbar {
          width: 23px;
          height: 23px;
        }

        ::-webkit-scrollbar-track {
          background-color: ${(props) => props.theme.colors.ContainerBgColor};
          background: ${(props) => props.theme.colors.ContainerBgColor};
          margin-bottom: 30px;
        }

        ::-webkit-scrollbar-thumb {
          border: solid 8px ${(props) => props.theme.colors.ContainerBgColor};

          background-color: ${(props) =>
            props.theme.colors.ScrollThumbContainerColor} !important;
          &:hover {
            background-color: ${(props) =>
              props.theme.colors.ScrollThumbContainerColorHover} !important;
          }
        }
      }
    }
  `,
  HighlightLeft: styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
  `,
  HighlightTitleContainer: styled.div`
    display: flex;
    align-items: center;

    @media (min-height: ${mobileHeightMin}) {
      @media (max-width: ${mobileWidthMax}) {
        display: none;
      }
    }

    .title-icon {
      color: ${(props) => props.theme.colors.subtextOnContainerColor};
      margin-left: 7px;
      padding: 2px;
      transition: all ease 0.2s;
      opacity: 0.8;
      cursor: pointer;

      &.code {
        margin-left: 8px;
      }

      &:hover {
        color: ${(props) => props.theme.colors.primaryColor};
        opacity: 1;
      }
    }
  `,
  HighlightTitleContainerMobile: styled.div`
    display: flex;
    align-items: center;

    .title-icon {
      color: ${(props) => props.theme.colors.subtextOnContainerColor};
      margin-left: 7px;
      padding: 2px;
      transition: all ease 0.2s;
      opacity: 0.8;
      cursor: pointer;

      &.code {
        margin-left: 8px;
      }

      &:hover {
        color: ${(props) => props.theme.colors.primaryColor};
        opacity: 1;
      }
    }
  `,
  HighlightTitle: styled.span`
    font-size: 40px;
    font-weight: 700;
    letter-spacing: 1px;
    font-family: din-condensed, sans-serif;
    font-style: italic;
    text-decoration: underline solid 4px
      ${(props) => props.theme.colors.primaryColor};
    text-underline-offset: 2.5px;
    margin-left: 10px;
    cursor: pointer;

    @media (min-height: ${mobileHeightMin}) {
      @media (max-width: ${mobileWidthMax}) {
        display: none;
      }
    }
  `,
  HighlightTitleMobile: styled.span`
    font-size: 36px;
    font-weight: 700;
    letter-spacing: 1px;
    font-family: din-condensed, sans-serif;
    font-style: italic;
    margin-left: 10px;
    cursor: pointer;
    display: none;

    @media (min-height: ${mobileHeightMin}) {
      @media (max-width: ${mobileWidthMax}) {
        display: flex;
      }
    }
  `,
  FaviconContainer: styled.div`
    min-width: ${projFavContainerWidth};
    max-width: ${projFavContainerWidth};
    min-height: ${projFavContainerWidth};
    max-height: ${projFavContainerWidth};

    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    overflow: hidden;

    img {
      min-width: ${projFavContainerWidth};
      max-width: ${projFavContainerWidth};
      min-height: ${projFavContainerWidth};
      max-height: ${projFavContainerWidth};
    }
  `,
  HighlightDescContainer: styled.div`
    font-size: 18px;
    font-weight: 600;
    font-family: din-2014, sans-serif;
    letter-spacing: 0.5px;
    padding: 10px 0px;

    z-index: 2;

    @media (min-height: ${mobileHeightMin}) {
      @media (max-width: ${mobileWidthMax}) {
        padding: 0px 0px 10px 0px;
      }
    }
  `,
  MobileLinks: styled.div`
    display: none;
    @media (min-height: ${mobileHeightMin}) {
      @media (max-width: ${mobileWidthMax}) {
        display: flex;
        width: 100%;
        justify-content: space-evenly;
        margin-top: 10px;
      }
    }
  `,
  HighlightTechContainer: styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    align-items: flex-start;
  `,
  TechWrapper: styled.div`
    display: flex;
  `,
  TechContainer: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 2;
    margin: 5px;
    color: ${(props) => props.theme.colors.textOnSkillColor};
    font-family: din-2014, sans-serif;
    font-weight: 700;
    overflow: hidden;
    cursor: default;
    transition: all ease 0.2s;

    -webkit-clip-path: polygon(
      ${techNotch} 0%,
      100% 0,
      100% ${techNotch},
      100% calc(100% - ${techNotch}),
      calc(100% - ${techNotch}) 100%,
      0 100%,
      0% calc(100% - ${techNotch}),
      0% ${techNotch}
    );
    clip-path: polygon(
      ${techNotch} 0%,
      100% 0,
      100% ${techNotch},
      100% calc(100% - ${techNotch}),
      calc(100% - ${techNotch}) 100%,
      0 100%,
      0% calc(100% - ${techNotch}),
      0% ${techNotch}
    );

    &:hover {
      -webkit-clip-path: polygon(
        0 0,
        calc(100% - ${techNotch}) 0,
        100% ${techNotch},
        100% calc(100% - ${techNotch}),
        100% 100%,
        ${techNotch} 100%,
        0% calc(100% - ${techNotch}),
        0% ${techNotch}
      );
      clip-path: polygon(
        0 0,
        calc(100% - ${techNotch}) 0,
        100% ${techNotch},
        100% calc(100% - ${techNotch}),
        100% 100%,
        ${techNotch} 100%,
        0% calc(100% - ${techNotch}),
        0% ${techNotch}
      );
    }

    &.javascript {
      background-color: ${javascriptColor};
    }

    &.html {
      background-color: ${htmlColor};
    }

    &.css {
      background-color: ${cssColor};
    }

    &.sql {
      background-color: ${sqlColor};
    }

    &.mongo {
      background-color: ${mongoColor};
    }

    &.express {
      background-color: ${expressColor};
    }

    &.react {
      background-color: ${reactColor};
    }

    &.node {
      background-color: ${nodeColor};
    }

    &.styled.components {
      background-color: ${styled_componentsColor};
    }

    &.mysql {
      background-color: ${mysqlColor};
    }

    &.aws {
      background-color: ${awsColor};
    }

    &.sass {
      background-color: ${sassColor};
    }

    &.photoshop {
      background-color: ${photoshopColor};
    }

    &.illustrator {
      background-color: ${illustratorColor};
    }

    &.excel {
      background-color: ${excelColor};
    }

    &.firebase {
      background-color: ${firebaseColor};
    }

    &.heroku {
      background-color: ${herokuColor};
    }

    &.jwt {
      background-color: ${jwtColor};
    }

    &.redux {
      background-color: ${reduxColor};
    }

    &.tailwind {
      background-color: ${tailwindColor};
    }
  `,
  TechIcon: styled.div`
    min-width: ${techIconContainerWidth};
    max-width: ${techIconContainerWidth};
    min-height: ${techIconContainerWidth};
    max-height: ${techIconContainerWidth};

    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 4px;
    overflow: hidden;

    img {
      min-width: ${techIconWidth};
      max-width: ${techIconWidth};
      min-height: ${techIconWidth};
      max-height: ${techIconWidth};
    }
  `,
  TechName: styled.span`
    font-size: 18px;
    line-height: 20px;
    margin-right: 6px;
    padding: 0px 2px;

    &.styled.components {
      font-size: 14px;
      line-height: 16px;
    }
  `,
  HighlightRight: styled.div`
    display: flex;
    flex: 2;
    margin: 15px 0px 0px 20px;
    background-color: ${(props) => props.theme.colors.ContainerBgColor2};

    -webkit-clip-path: polygon(
      ${highlightNotch} 0%,
      100% 0,
      100% 0,
      0 100%,
      0 100%,
      0% ${highlightNotch}
    );
    clip-path: polygon(
      ${highlightNotch} 0%,
      100% 0,
      100% 100%,
      100% 100%,
      0 100%,
      0% ${highlightNotch}
    );

    @media (min-height: ${mobileHeightMin}) {
      @media (max-width: ${mobileWidthMax}) {
        display: none;
      }
    }
  `,
  HighlightRightInner: styled.div`
    margin: 15px 2px 15px 15px;
    overflow-y: scroll;
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;

    -webkit-clip-path: polygon(
      ${highlightInnerNotch} 0%,
      100% 0,
      100% calc(100% - ${highlightInnerNotch}),
      calc(100% - ${highlightInnerNotch}) 100%,
      0 100%,
      0% ${highlightInnerNotch}
    );
    clip-path: polygon(
      ${highlightInnerNotch} 0%,
      100% 0,
      100% 100%,
      100% 100%,
      0 100%,
      0% ${highlightInnerNotch}
    );

    ::-webkit-scrollbar {
      width: 23px;
      height: 23px;
    }

    ::-webkit-scrollbar-track {
      background-color: ${(props) => props.theme.colors.ContainerBgColor2};
      background: ${(props) => props.theme.colors.ContainerBgColor2};
      margin-bottom: 30px;
    }

    ::-webkit-scrollbar-thumb {
      border: solid 8px ${(props) => props.theme.colors.ContainerBgColor2};

      background-color: ${(props) =>
        props.theme.colors.ScrollThumbContainerColor} !important;
      &:hover {
        background-color: ${(props) =>
          props.theme.colors.ScrollThumbContainerColorHover} !important;
      }
    }
  `,

  GalleryContainer: styled.div`
    display: flex;
    flex-direction: column;
    // min-height: ${HighlightGalleryContainerHeight};
    // max-height: ${HighlightGalleryContainerHeight};
  `,
  GalleryImg: styled.div`
    min-width: 100%;
    max-width: 100%;
    padding: 10px 10px 20px 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      object-fit: contain;
      max-width: 100%;
      max-height: 320px;
      border: solid 5px ${(props) => props.theme.colors.ContainerBgColor};
      cursor: pointer;
    }
  `,
};

export default ProjectsSC;
