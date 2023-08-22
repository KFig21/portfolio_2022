import styled from "styled-components";

export const navHeight = "56px";
// colors
export const javascriptColor = "rgb(247, 189, 42)";
export const htmlColor = "#f16529";
export const cssColor = "#1c86c4";
export const sqlColor = "#2887db";
export const mongoColor = "#41b350";
export const expressColor = "rgb(247, 189, 42)";
export const reactColor = "#61b8fb";
export const nodeColor = "#41b350";
export const styled_componentsColor = "rgb(247, 189, 42)";
export const mysqlColor = "#1f7aa5";
export const awsColor = "#1f7aa5";
export const sassColor = "#cf649a";
export const photoshopColor = "#39a9eb";
export const illustratorColor = "#ff9b00";
export const excelColor = "#1a8d56";
export const firebaseColor = "#f79b00";
export const herokuColor = "#8c4ff0";
export const jwtColor = "#00c3b9";
export const reduxColor = "#8c4ff0";
export const tailwindColor = "#17bbb9";
export const swiftColor = "#fe5f2e";
export const typescriptColor = "#007dc9";
export const postgresColor = "#006a92";
export const jiraColor = "#008aff";
// mobile
export const mobileWidthMax = "800px";
export const mobileHeightMin = "421px";
// desktop
export const desktopWidthMin = "801px";
// mobile keyboard
export const mobileKeyboardHeightMax = "500px";

const SC = {
  // App.js
  AppContainer: styled.div`
    min-height: 100vh;
    max-height: 100vh;
    color: ${(props) => props.theme.colors.textOnBgColor} !important;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    overflow-x: hidden;
    overflow-y: overlay;
    scroll-behavior: smooth;

    ::-webkit-scrollbar {
      width: 23px;
      height: 23px;
      z-index: 100;
    }

    ::-webkit-scrollbar-track {
      background-color: ${(props) => props.theme.colors.backgroundColor};
      background: ${(props) => props.theme.colors.backgroundColor};
    }

    ::-webkit-scrollbar-thumb {
      border: solid 8px ${(props) => props.theme.colors.backgroundColor};

      background-color: ${(props) =>
        props.theme.colors.ScrollThumbColor} !important;
      &:hover {
        background-color: ${(props) =>
          props.theme.colors.ScrollThumbColorHover} !important;
      }
    }
  `,
  PrimaryColorText: styled.span`
    color: ${(props) => props.theme.colors.primaryColor};
  `,
  PageCorner: styled.div`
    position: absolute;
    height: 12px;
    width: 12px;
    z-index: 2;

    &.top {
      top: calc(${navHeight} + 20px);
      border-top: solid 3px ${(props) => props.theme.colors.pageCornerColor};
    }
    &.left {
      left: 20px;
      border-left: solid 3px ${(props) => props.theme.colors.pageCornerColor};

      @media (min-height: ${mobileHeightMin}) {
        @media (max-width: ${mobileWidthMax}) {
          right: 25px;
        }
      }
    }
    &.bottom {
      bottom: 20px;
      border-bottom: solid 3px ${(props) => props.theme.colors.pageCornerColor};
    }
    &.right {
      right: 40px;
      border-right: solid 3px ${(props) => props.theme.colors.pageCornerColor};

      @media (min-height: ${mobileHeightMin}) {
        @media (max-width: ${mobileWidthMax}) {
          right: 25px;
        }
      }
    }

    @media (max-height: ${mobileKeyboardHeightMax}) {
      @media (max-width: ${mobileWidthMax}) {
        display: none;
      }
    }
  `,
};

export default SC;
