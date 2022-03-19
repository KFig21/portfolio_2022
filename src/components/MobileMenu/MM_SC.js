import styled from "styled-components";

const MM_SC = {
  MM_Page: styled.div`
    width: 100vw;
    min-height: 100vh;
    max-height: 100vh;
    position: fixed;
    left: -2000px;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    overflow: hidden;

    z-index: 100;

    &.open {
      left: 0px;
      z-index: 100;
    }

    &.close {
      z-index: 100;
    }
  `,
  MM_Background: styled.div`
    background-color: ${(props) => props.theme.colors.mm_BackgroundColor};
    width: 100vw;
    min-height: 100vh;
    max-height: 100vh;
    position: absolute;
    transition: all ease 0.5s;

    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    z-index: 2;

    &.open {
      background-color: ${(props) => props.theme.colors.mm_BackgroundColor};
    }

    &.close {
      background-color: transparent;
    }
  `,
  MM_Container: styled.div`
    background-color: ${(props) => props.theme.colors.mm_ContainerColor};
    width: 70vw;
    min-height: 100vh;
    max-height: 100vh;
    position: fixed;
    left: -2000px;

    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    overflow: hidden;

    z-index: 3;
    transition: all ease 0.5s;

    &.open {
      left: 0px;
    }

    &.close {
      left: -2000px;
    }

    .close-icon {
      position: absolute;
      top: 20px;
      right: 20px;
      color: ${(props) => props.theme.colors.textOnContainerColor};
      z-index: 4;

      min-width: 30px;
      max-width: 30px;
      max-height: 30px;
      min-height: 30px;
    }
  `,
  MM_Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding: 60px 20px;
    width: 100%;

    z-index: 3;
  `,
  MM_LogoContainer: styled.a`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;

    z-index: 3;
  `,
  MM_Logo: styled.svg`
    transition: all 0.2s ease !important;
    max-height: 60px;
    max-width: 60px;
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    .navbar-svg-g {
      fill: ${(props) => props.theme.colors.primaryColor};
    }
  `,
  LinkContainer: styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 20px;

    z-index: 3;

    &.mm-colors {
      flex-direction: row;
    }
  `,
  NavLink: styled.a`
    font-weight: 700;
    font-size: 20px;
    margin: 0px 20px;
    padding: 10px 2px;
    cursor: pointer;
    text-decoration: none;
    color: ${(props) => props.theme.colors.textOnContainerColor};
    font-family: din-2014, sans-serif;
    font-weight: 700;
    font-style: normal;
    transition: all 0.15s ease;

    &.underline {
      display: inline;
      position: relative;
      overflow: hidden;
    }
    &.underline:after {
      content: "";
      position: absolute;
      z-index: -1;
      right: 0;
      width: 0;
      bottom: -5px;
      background: ${(props) => props.theme.colors.primaryColor};
      height: 4px;
      transition-property: width;
      transition-duration: 0.3s;
      transition-timing-function: ease-out;

      @include mobileHorizontal {
        content: none;
      }
    }
    &.underline:hover:after,
    &.underline:focus:after,
    &.underline:active:after {
      left: 0;
      right: auto;
      width: 100%;
    }

    &.active {
      display: inline;
      position: relative;
      font-weight: 600;
      overflow: hidden;
    }
    &.active:after {
      content: "";
      position: absolute;
      background: ${(props) => props.theme.colors.primaryColor};
      z-index: -1;
      left: 0;
      right: auto;
      width: 100%;
      bottom: 3px;
      height: 4px;
      transition-property: width;
      transition-duration: 0.3s;
      transition-timing-function: ease-out;
    }
    .inactive {
      text-decoration: none;
    }
  `,
  LeetCodeIcon: styled.svg`
    transition: all 0.15s ease;
    max-height: 24px;
    max-width: 24px;
    min-height: 24px;
    min-width: 24px;
    margin-bottom: 2px;
    margin-left: 1px;

    .leetcode-g {
      fill: ${(props) => props.theme.colors.textOnContainerColor};
    }
  `,
  NavIcon: styled.a`
    margin: 7px;
    cursor: pointer;
    color: ${(props) => props.theme.colors.textOnContainerColor};
    transition: all 0.15s ease;
    min-height: 35px;
    max-height: 35px;
    min-width: 35px;
    max-width: 35px;
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  `,
  ThemeContainer: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px;
    transition: all ease 0.2s;
    flex-direction: column;

    .theme-icon {
      margin: 0px 6px;
      cursor: pointer;
      color: ${(props) => props.theme.colors.textOnContainerColor};

      &.active {
        color: ${(props) => props.theme.colors.primaryColor};
      }
    }

    .theme-type {
      display: flex;
      padding: 8px;
    }

    .mode {
      border-bottom: solid 2px rgba(150, 150, 150, 0.4);
    }
  `,
};

export default MM_SC;
