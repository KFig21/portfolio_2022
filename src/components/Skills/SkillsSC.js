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
  swiftColor,
  typescriptColor,
  postgresColor,
  jiraColor,
  mobileWidthMax,
  mobileHeightMin,
  desktopWidthMin,
  mobileKeyboardHeightMax,
} from "../../themes/SC";

const notch = "60px";
const notchMobile = "40px";
const skillNotch = "10px";
const skillImgContainerWidth = "50px";
const skillWrapperContainerWidth = "110px";

const SkillsSC = {
  SkillsPage: styled.div`
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

  SkillsContainer: styled.div`
    background-color: ${(props) => props.theme.colors.ContainerBgColor};
    display: flex;
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
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        max-height: 75vh;
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

  SkillsLeft: styled.div`
    background-color: ${(props) => props.theme.colors.ContainerBgColor2};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 40px;
    flex-grow: 1;
    max-width: 380px;
    min-height: 100%;

    z-index: 2;

    @media (min-height: ${mobileHeightMin}) {
      @media (max-width: ${mobileWidthMax}) {
        width: 100%;
        justify-content: center;
        padding: 10px 0px;
      }
    }
  `,

  SkillsTitle: styled.a`
    color: ${(props) => props.theme.colors.textOnContainerColor};
    font-size: 80px;
    font-weight: 900;
    letter-spacing: 1px;
    font-family: din-condensed, sans-serif;
    font-style: italic;
    text-decoration: underline solid 7px
      ${(props) => props.theme.colors.primaryColor};
    text-underline-offset: 5px;
    margin-bottom: 10px;

    z-index: 3;

    @media (min-height: ${mobileHeightMin}) {
      @media (max-width: ${mobileWidthMax}) {
        font-size: 50px;
      }
    }
  `,

  TitleHover: styled.a`
    position: absolute;
    width: 380px;
    height: 100px;
    left: -380px;
    top: 0px;
    // opacity: 0;
    z-index: 2;

    &:hover + .section-container,
    &:hover ~ .section-container,
    &:focus + .section-container,
    &:focus ~ .section-container {
      .javascript {
        background-color: ${javascriptColor};
        color: ${(props) => props.theme.colors.textOnSkillColor};
      }

      .html {
        background-color: ${htmlColor};
        color: ${(props) => props.theme.colors.textOnSkillColor};
      }

      .css {
        background-color: ${cssColor};
        color: ${(props) => props.theme.colors.textOnSkillColor};
      }

      .sql {
        background-color: ${sqlColor};
        color: ${(props) => props.theme.colors.textOnSkillColor};
      }

      .mongo {
        background-color: ${mongoColor};
        color: ${(props) => props.theme.colors.textOnSkillColor};
      }

      .express {
        background-color: ${expressColor};
        color: ${(props) => props.theme.colors.textOnSkillColor};
      }

      .react {
        background-color: ${reactColor};
        color: ${(props) => props.theme.colors.textOnSkillColor};
      }

      .node {
        background-color: ${nodeColor};
        color: ${(props) => props.theme.colors.textOnSkillColor};
      }

      .styled.components {
        background-color: ${styled_componentsColor};
        color: ${(props) => props.theme.colors.textOnSkillColor};
      }

      .mysql {
        background-color: ${mysqlColor};
        color: ${(props) => props.theme.colors.textOnSkillColor};
      }

      .aws {
        background-color: ${awsColor};
        color: ${(props) => props.theme.colors.textOnSkillColor};
      }

      .sass {
        background-color: ${sassColor};
        color: ${(props) => props.theme.colors.textOnSkillColor};
      }

      .photoshop {
        background-color: ${photoshopColor};
        color: ${(props) => props.theme.colors.textOnSkillColor};
      }

      .typescript {
        background-color: ${typescriptColor};
        color: ${(props) => props.theme.colors.textOnSkillColor};
      }

      .postgres {
        background-color: ${postgresColor};
        color: ${(props) => props.theme.colors.textOnSkillColor};
      }

      .jira {
        background-color: ${jiraColor};
        color: ${(props) => props.theme.colors.textOnSkillColor};
      }

      .illustrator {
        background-color: ${illustratorColor};
        color: ${(props) => props.theme.colors.textOnSkillColor};
      }

      .excel {
        background-color: ${excelColor};
        color: ${(props) => props.theme.colors.textOnSkillColor};
      }

      .firebase {
        background-color: ${firebaseColor};
        color: ${(props) => props.theme.colors.textOnSkillColor};
      }

      .heroku {
        background-color: ${herokuColor};
        color: ${(props) => props.theme.colors.textOnSkillColor};
      }

      .swift {
        background-color: ${swiftColor};
        color: ${(props) => props.theme.colors.textOnSkillColor};
      }
    }

    @media (min-height: ${mobileHeightMin}) {
      @media (max-width: ${mobileWidthMax}) {
        left: unset;
        top: -100px;
      }
    }
  `,

  SkillsInfo: styled.span`
    color: ${(props) => props.theme.colors.textOnContainerColor};
    font-size: 20px;
    font-weight: 600;
    font-family: din-2014, sans-serif;
    max-width: 600px;
    margin: 12px 0px;
    letter-spacing: 1px;

    z-index: 2;

    @media (min-height: ${mobileHeightMin}) {
      @media (max-width: ${mobileWidthMax}) {
        display: none;
      }
    }
  `,

  SkillsRight: styled.div`
    background-color: ${(props) => props.theme.colors.ContainerBgColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 16px 10px;
    flex-grow: 2;
    position: relative;

    z-index: 2;

    @media (min-height: ${mobileHeightMin}) {
      @media (max-width: ${mobileWidthMax}) {
        overflow-y: overlay;
        align-items: center;
        justify-content: flex-start;
        max-height: 60vh;
        width: 100%;

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

  SectionContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px 0px;

    @media (min-height: ${mobileHeightMin}) {
      @media (max-width: ${mobileWidthMax}) {
        min-width: 100%;
        max-width: 100%;
      }
    }
  `,

  SectionTitle: styled.span`
    color: ${(props) => props.theme.colors.textOnContainerColor};
    font-size: 30px;
    font-weight: 700;
    letter-spacing: 1px;
    font-family: din-condensed, sans-serif;
    font-style: italic;
    text-decoration: underline solid 4px
      ${(props) => props.theme.colors.primaryColor};
    text-underline-offset: 3px;
    margin-bottom: 10px;
    padding: 0px 20px;
    cursor: default;

    z-index: 2;

    &.languages:hover + .section-container {
      .javascript {
        background-color: ${javascriptColor};
        color: ${(props) => props.theme.colors.textOnSkillColor};
      }

      .html {
        background-color: ${htmlColor};
        color: ${(props) => props.theme.colors.textOnSkillColor};
      }

      .css {
        background-color: ${cssColor};
        color: ${(props) => props.theme.colors.textOnSkillColor};
      }

      .sql {
        background-color: ${sqlColor};
        color: ${(props) => props.theme.colors.textOnSkillColor};
      }

      .swift {
        background-color: ${swiftColor};
        color: ${(props) => props.theme.colors.textOnSkillColor};
      }

      .typescript {
        background-color: ${typescriptColor};
        color: ${(props) => props.theme.colors.textOnSkillColor};
      }
    }

    &.technologies:hover + .section-container {
      .mongo {
        background-color: ${mongoColor};
        color: ${(props) => props.theme.colors.textOnSkillColor};
      }

      .express {
        background-color: ${expressColor};
        color: ${(props) => props.theme.colors.textOnSkillColor};
      }

      .react {
        background-color: ${reactColor};
        color: ${(props) => props.theme.colors.textOnSkillColor};
      }

      .node {
        background-color: ${nodeColor};
        color: ${(props) => props.theme.colors.textOnSkillColor};
      }

      .styled.components {
        background-color: ${styled_componentsColor};
        color: ${(props) => props.theme.colors.textOnSkillColor};
      }

      .mysql {
        background-color: ${mysqlColor};
        color: ${(props) => props.theme.colors.textOnSkillColor};
      }

      .sass {
        background-color: ${sassColor};
        color: ${(props) => props.theme.colors.textOnSkillColor};
      }

      .postgres {
        background-color: ${postgresColor};
        color: ${(props) => props.theme.colors.textOnSkillColor};
      }
    }

    &.other:hover + .section-container {
      .aws {
        background-color: ${awsColor};
        color: ${(props) => props.theme.colors.textOnSkillColor};
      }
      
      .photoshop {
        background-color: ${photoshopColor};
        color: ${(props) => props.theme.colors.textOnSkillColor};
      }
      
      .typescript {
        background-color: ${typescriptColor};
        color: ${(props) => props.theme.colors.textOnSkillColor};
      }

      .swift {
        background-color: ${swiftColor};
        color: ${(props) => props.theme.colors.textOnSkillColor};
      }

      .postgres {
        background-color: ${postgresColor};
        color: ${(props) => props.theme.colors.textOnSkillColor};
      }

      .jira {
        background-color: ${jiraColor};
        color: ${(props) => props.theme.colors.textOnSkillColor};
      }

      .heroku {
        background-color: ${herokuColor};
        color: ${(props) => props.theme.colors.textOnSkillColor};
      }

      .illustrator {
        background-color: ${illustratorColor};
        color: ${(props) => props.theme.colors.textOnSkillColor};
      }

      .excel {
        background-color: ${excelColor};
        color: ${(props) => props.theme.colors.textOnSkillColor};
      }

      .firebase {
        background-color: ${firebaseColor};
        color: ${(props) => props.theme.colors.textOnSkillColor};
      }
    }
  `,

  SkillsGrid: styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    justify-content: center;
    padding: 0px 20px;

    z-index: 2;

    @media (min-height: ${mobileHeightMin}) {
      @media (max-width: ${mobileWidthMax}) {
        grid-template-columns: 1fr;
        min-width: 100%;
        max-width: 100%;
      }
    }
  `,

  SkillInfoContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    min-width: ${skillWrapperContainerWidth};
    max-width: ${skillWrapperContainerWidth};
    padding-left: 10px;

    @media (min-height: ${mobileHeightMin}) {
      @media (max-width: ${mobileWidthMax}) {
        min-width: unset;
        max-width: unset;
      }
    }
  `,
  SkillName: styled.span`
    font-size: 19px;
    line-height: 20px;
    min-width: ${skillWrapperContainerWidth};
    max-width: ${skillWrapperContainerWidth};

    &.styled.components {
      font-size: 14px;
      line-height: 16px;
    }
  `,
  SkillExp: styled.span`
    font-size: 15px;
    font-weight: 500;

    &.styled.components {
      font-size: 13px;
    }
  `,

  SkillWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 10px;
    margin: 10px;
    background-color
      ${(props) => props.theme.colors.ContainerBgColor2};
    color: ${(props) => props.theme.colors.textOnContainerColor};
    font-family: din-2014, sans-serif;
    font-weight: 700;
    overflow: hidden;
    cursor: default;
    min-width: calc(${skillImgContainerWidth} + ${skillWrapperContainerWidth});
    max-width: calc(${skillImgContainerWidth} + ${skillWrapperContainerWidth});
    transition: all ease .25s;

    @media (min-height: ${mobileHeightMin}) {
      @media (max-width: ${mobileWidthMax}) {
        min-width: unset;
        max-width: unset;
        justify-content: flex-start;
        padding: 0px;
      }
    }

    -webkit-clip-path: polygon(
      ${skillNotch} 0%,
      100% 0,
      100% calc(100% - ${skillNotch}),
      calc(100% - ${skillNotch}) 100%,
      0 100%,
      0% ${skillNotch}
    );
    clip-path: polygon(
      ${skillNotch} 0%,
      100% 0,
      100% calc(100% - ${skillNotch}),
      calc(100% - ${skillNotch}) 100%,
      0 100%,
      0% ${skillNotch}
    );

    &:hover{
      color: ${(props) => props.theme.colors.textOnSkillColor};

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
  
      &.typescript {
        background-color: ${typescriptColor};
      }
  
      &.swift {
        background-color: ${swiftColor};
      }
  
      &.postgres {
        background-color: ${postgresColor};
      }
  
      &.jira {
        background-color: ${jiraColor};
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
    }

    z-index: 2;
  `,

  ImgContainer: styled.div`
    min-width: ${skillImgContainerWidth};
    max-width: ${skillImgContainerWidth};
    min-height: ${skillImgContainerWidth};
    max-height: ${skillImgContainerWidth};

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 33px;
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

    &.typescript {
      background-color: ${typescriptColor};
    }

    &.swift {
      background-color: ${swiftColor};
    }

    &.postgres {
      background-color: ${postgresColor};
    }

    &.jira {
      background-color: ${jiraColor};
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
  `,
};

export default SkillsSC;
