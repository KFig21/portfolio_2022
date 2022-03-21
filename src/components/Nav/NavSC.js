import styled from "styled-components";

import {
  navHeight,
  mobileWidthMax,
  mobileHeightMin,
  mobileKeyboardHeightMax,
} from "../../themes/SC";

const notch = "10px";
const themeNotch = "10px";

const NavSC = {
  Nav: styled.div`
    background-color: transparent;
    position: fixed;
    top: 0px;
    left: 0px;
    padding-left: 22px;
    z-index: 100;
    min-height: 80px;
    max-height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;

    width: calc(100% - 22px);
    transition: all 0.2s ease;

    &.true {
      background-color: ${(props) => props.theme.colors.NavBgColor};
      min-height: ${navHeight};
      max-height: ${navHeight};
    }
    &.false {
      background-color: transparent;
    }

    @media (max-height: ${mobileKeyboardHeightMax}) {
      @media (max-width: ${mobileWidthMax}) {
        display: none;
      }
    }
  `,
  NavWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    width: 92%;
  `,
  NavContainer: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    &.nav-right {
      display: block;
      margin: auto 0px;
    }

    @media (min-height: ${mobileHeightMin}) {
      @media (max-width: ${mobileWidthMax}) {
        display: none;
        &.nav-right {
          display: none;
        }
      }
    }
  `,
  NavCenter: styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,
  NavLogo: styled.svg`
    background-color: ${(props) => props.theme.colors.logoBorder};
    transition: all 0.2s ease !important;
    max-height: 60px;
    max-width: 60px;
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: center;

    .navbar-svg-g {
      fill: ${(props) => props.theme.colors.primaryColor};
    }

    &:hover {
      transform: scale(1.15);
    }

    &.true {
      max-height: 40px;
      max-width: 40px;
      .navbar-svg-g {
        max-height: 40px;
        max-width: 40px;
      }
    }
    &.false {
      max-height: 60px;
      max-width: 60px;
      .navbar-svg-g {
        max-height: 60px;
        max-width: 60px;
      }
    }
  `,
  NavLink: styled.a`
    font-weight: 700;
    font-size: 18px;
    margin: 0px 20px;
    padding: 0px 2px;
    cursor: pointer;
    text-decoration: none;
    color: ${(props) => props.theme.colors.textOnBgColor};
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
      z-index: -1;
      left: 0;
      right: auto;
      width: 100%;
      bottom: -5px;
      height: 4px;
      transition-property: width;
      transition-duration: 0.3s;
      transition-timing-function: ease-out;
    }
    .inactive {
      text-decoration: none;
    }
  `,
  NavIcon: styled.a`
    margin: 0px 7px;
    &.lc-container {
      margin: 0px 7px 0px 5px;
    }
    cursor: pointer;
    color: ${(props) => props.theme.colors.textOnBgColor};
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

    &.dark {
      .nav-icon {
        transition: all 0.15s ease;
        &:hover {
          color: ${(props) => props.theme.colors.primaryColor};
        }
      }
      .leetcode-icon {
        transition: all 0.15s ease;
        &:hover {
          .leetcode-g {
            fill: ${(props) => props.theme.colors.primaryColor};
          }
        }
      }
    }

    &.light {
      &:hover {
        background-color: ${(props) => props.theme.colors.primaryColor};
      }
    }
  `,
  MailWrapper: styled.div`
    position: absolute;
    top: 50px;
    height: 0px;
    max-height: 0px;
    transition: all ease 0.3s;
    overflow: hidden;

    &.active {
      height: 100px;
      max-height: 100px;
      overflow: visible;
    }
  `,

  FloatingText: styled.span`
    position: absolute;
    font-weight: 600;
    opacity: 0;
    top: -1000px;
    left: 0px;
    display: flex;
    color: ${(props) => props.theme.colors.primaryColor};

    z-index: 100;

    &.active {
      z-index: 100;
      animation: floatingText 1.1s ease;
    }

    @keyframes floatingText {
      0% {
        top: 30px;
        opacity: 0;
      }

      50% {
        opacity: 1;
      }

      100% {
        top: 50px;
        opacity: 0;
      }
    }
  `,
  MailContainer: styled.div`
    background-color: ${(props) => props.theme.colors.primaryColor};
    color: ${(props) => props.theme.colors.textOnPrimaryColor};
    padding: 0px;
    height: 0px;
    max-height: 0px;
    font-family: din-2014, sans-serif;
    font-weight: 700;
    font-size: 18;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: default;
    transition: all ease 0.3s;
    position: relative;
    overflow: visible;

    &.active {
      height: 35px;
      max-height: 35px;
      padding: 5px 10px;
      overflow: visible;
      box-shadow: 0px 0px 10px black;
    }

    .mail-icon {
      margin: 0px 5px;
      max-height: 22px;
      min-height: 22px;
      min-width: 22px;
      max-width: 22px;
      cursor: pointer;
      transition: all ease 0.15s;

      &:active {
        transform: scale(0.85);
      }
    }

    -webkit-clip-path: polygon(
      ${notch} 0%,
      100% 0,
      100% ${notch},
      100% calc(100% - ${notch}),
      calc(100% - ${notch}) 100%,
      0 100%,
      0% calc(100% - ${notch}),
      0% ${notch}
    );
    clip-path: polygon(
      ${notch} 0%,
      100% 0,
      100% ${notch},
      100% calc(100% - ${notch}),
      calc(100% - ${notch}) 100%,
      0 100%,
      0% calc(100% - ${notch}),
      0% ${notch}
    );
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
      fill: ${(props) => props.theme.colors.textOnBgColor};
    }
  `,
  ThemeContainer: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 35px;
    // backdrop-filter: blur(2px);
    background-color: ${(props) => props.theme.colors.themeContainerBgColor};
    padding: 8px;
    transition: all ease 0.2s;

    .theme-icon {
      margin: 0px 4px;
      cursor: pointer;

      &.active {
        color: ${(props) => props.theme.colors.primaryColor};
      }

      &:hover {
        transform: scale(1.1);
      }
    }

    -webkit-clip-path: polygon(
      ${themeNotch} 0%,
      100% 0,
      100% ${themeNotch},
      100% calc(100% - ${themeNotch}),
      calc(100% - ${themeNotch}) 100%,
      0 100%,
      0% calc(100% - ${themeNotch}),
      0% ${themeNotch}
    );
    clip-path: polygon(
      ${themeNotch} 0%,
      100% 0,
      100% ${themeNotch},
      100% calc(100% - ${themeNotch}),
      calc(100% - ${themeNotch}) 100%,
      0 100%,
      0% calc(100% - ${themeNotch}),
      0% ${themeNotch}
    );
  `,
  Divider: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 8px;
    font-weight: 100;
    max-width: 1px;
    opacity: 0.5;
    color: ${(props) => props.theme.colors.subtextOnBgColor};
    background-color: ${(props) => props.theme.colors.textOnBgColor};
  `,
  HamburgerContainer: styled.div`
    display: none;
    color: ${(props) => props.theme.colors.pageCornerColor};
    position: absolute;
    left: -10px;
    top: 50%;
    transform: translateY(-50%);
    min-width: 40px;
    max-width: 40px;
    max-height: 40px;
    min-height: 40px;

    .hamburger {
      min-width: 40px;
      max-width: 40px;
      max-height: 40px;
      min-height: 40px;
    }

    @media (min-height: ${mobileHeightMin}) {
      @media (max-width: ${mobileWidthMax}) {
        display: block;
      }
    }
  `,
};

export default NavSC;
