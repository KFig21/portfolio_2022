import styled from "styled-components";

import {
  navHeight,
  mobileWidthMax,
  mobileHeightMin,
  desktopWidthMin,
} from "../../themes/SC";

const notch = "45px";
const buttonNotch = "10px";

const ContactSC = {
  ContactPage: styled.div`
    background-color: ${(props) => props.theme.colors.backgroundColor};

    width: 100vw;
    min-height: 100vh;
    max-height: 100vh;
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  `,
  ContactContainer: styled.div`
    background-color: ${(props) => props.theme.colors.ContainerBgColor};
    display: flex;
    align-items: flex-start;
    justify-content: center;
    overflow: visible;
    z-index: 2;
    max-width: 80%;
    min-height: 431px;
    margin-top: calc(${navHeight} / 2);
    position: relative;

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
        overflow-x: overlay;
        justify-content: flex-start;
        border-bottom: solid 3px ${(props) => props.theme.colors.primaryColor};

        ::-webkit-scrollbar {
          width: 10px;
          height: 10px;
        }

        ::-webkit-scrollbar-track {
          background-color: ${(props) => props.theme.colors.NavBgColor};
          background: ${(props) => props.theme.colors.NavBgColor};
          margin-right: 30px;
        }

        ::-webkit-scrollbar-thumb {
          border: solid 0px ${(props) => props.theme.colors.ContainerBgColor};

          background-color: ${(props) =>
            props.theme.colors.ScrollThumbContainerColorHover} !important;
        }
      }
    }
  `,
  ContactTitle: styled.a`
    color: ${(props) => props.theme.colors.textOnContainerColor};
    font-size: 30px;
    font-weight: 500;
    font-family: din-2014, sans-serif;
    text-decoration: none;

    z-index: 2;
  `,
  ContactSubtext: styled.span`
    color: ${(props) => props.theme.colors.subtextOnContainerColor};
    font-size: 17px;
    font-weight: 500;
    font-family: din-2014, sans-serif;
    z-index: 2;
    letter-spacing: 0.5px;
  `,

  // left
  ContactLeft: styled.div`
    background-color: ${(props) => props.theme.colors.ContainerBgColor2};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 40px;
    flex-grow: 1;
    max-width: 380px;
    min-height: 431px;

    z-index: 2;
    :2 ;

    @media (min-height: ${mobileHeightMin}) {
      @media (max-width: ${mobileWidthMax}) {
        max-width: 300px;
        min-width: 300px;
        min-height: 435px;
        padding: 20px 20px;
      }
    }
  `,
  ContactForm: styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 300px;
    margin: 8px auto auto auto;

    @media (min-height: ${mobileHeightMin}) {
      @media (max-width: ${mobileWidthMax}) {
        width: 100%;
      }
    }
  `,
  ContactButton: styled.button`
    background: ${(props) => props.theme.colors.primaryColor};
    color: ${(props) => props.theme.colors.textOnPrimaryColor} !important;
    &:hover {
      background: linear-gradient(
        130deg,
        ${(props) => props.theme.colors.primaryColor},
        ${(props) => props.theme.colors.primaryColor},
        ${(props) => props.theme.colors.primaryColor},
        ${(props) => props.theme.colors.primaryColor},
        ${(props) => props.theme.colors.primaryColorAnimation},
        ${(props) => props.theme.colors.primaryColor},
        ${(props) => props.theme.colors.primaryColor},
        ${(props) => props.theme.colors.primaryColor},
        ${(props) => props.theme.colors.primaryColor}
      );
      -webkit-animation: animated-logo 2.2s ease infinite;
      -moz-animation: animated-logo 2.2s ease infinite;
      animation: animated-logo 2.2s ease infinite;
      background-size: 300% 300%;
    }

    width: 120px;
    border: none;
    font-size: 24px;
    font-weight: 600;
    letter-spacing: 1px;
    font-family: din-2014, sans-serif;
    padding: 5px 0px;
    margin: 15px 0px;
    cursor: pointer;
    overflow: visible;

    -webkit-clip-path: polygon(
      ${buttonNotch} 0%,
      100% 0,
      100% calc(100% - ${buttonNotch}),
      calc(100% - ${buttonNotch}) 100%,
      0 100%,
      0% ${buttonNotch}
    );
    clip-path: polygon(
      ${buttonNotch} 0%,
      100% 0,
      100% calc(100% - ${buttonNotch}),
      calc(100% - ${buttonNotch}) 100%,
      0 100%,
      0% ${buttonNotch}
    );

    @-webkit-keyframes animated-logo {
      0% {
        background-position: 96% 100%;
      }

      100% {
        background-position: 5% 0%;
      }
    }
    @-moz-keyframes animated-logo {
      0% {
        background-position: 96% 100%;
      }

      100% {
        background-position: 5% 0%;
      }
    }
    @keyframes animated-logo {
      0% {
        background-position: 96% 100%;
      }

      100% {
        background-position: 5% 0%;
      }
    }
  `,
  ContactInput: styled.input`
    &:focus {
      border-color: ${(props) => props.theme.colors.primaryColor} !important;
    }
    &:hover {
      border-color: ${(props) =>
        props.theme.colors.primaryColorFaded} !important;
    }
    transition: all 0.2s ease !important;

    width: inherit;
    min-height: 47px;
    background-color: transparent;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: solid 1px;
    border-color: gray;
    padding: 12px 0px 4px 0px;
    outline: none;
    color: ${(props) => props.theme.colors.textOnContainerColor};
    transition: border-color 0.22s ease-in-out;

    font-size: 18px;
    font-weight: 500;
    font-family: din-2014, sans-serif;
    letter-spacing: 0.5px;

    @media (min-height: ${mobileHeightMin}) {
      @media (max-width: ${mobileWidthMax}) {
        width: 100%;
      }
    }
  `,
  ContactMessage: styled.textarea`
    &:focus {
      border-color: ${(props) => props.theme.colors.primaryColor} !important;
    }
    &:hover {
      border-color: ${(props) =>
        props.theme.colors.primaryColorFaded} !important;
    }

    width: inherit;
    height: 130px;
    min-height: 47px;
    max-height: 250px;
    background-color: transparent;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: solid 1px gray;
    padding: 12px 0px 4px 0px;
    outline: none;
    color: ${(props) => props.theme.colors.textOnContainerColor};
    font-size: 16px;
    transition: border-color 0.22s ease-in-out;
    resize: vertical;

    font-size: 18px;
    font-weight: 500;
    font-family: din-2014, sans-serif;
    letter-spacing: 0.5px;
  `,

  //  right
  ContactRight: styled.div`
    background-color: ${(props) => props.theme.colors.ContainerBgColor};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: start;
    padding: 20px 40px;
    flex-grow: 1;
    max-width: 380px;
    min-height: 431px;
    overflow: visible;

    z-index: 2;

    @media (min-height: ${mobileHeightMin}) {
      @media (max-width: ${mobileWidthMax}) {
        max-width: 300px;
        min-width: 300px;
        min-height: 435px;
        padding: 20px 20px;
      }
    }
  `,
  InfoContainer: styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    border-top: solid 2px ${(props) => props.theme.colors.ContainerBgColor2};

    z-index: 2;
  `,
  ContactItem: styled.div`
    &:hover .contact-icon-container {
      background: ${(props) => props.theme.colors.primaryColor};
      color: black;
      color: black;
    }
    &:hover .item-details .item-span {
      color: ${(props) => props.theme.colors.primaryColor};
    }
    &:hover #leetcode path {
      transition: fill 0.2s ease;
      fill: black;
    }

    display: flex;
    padding: 6px 0px;
    text-decoration: none;
    align-items: center;
    justify-self: start;
    transition: all 0.2s linear;
    height: 55px;
    max-width: inherit;
    overflow: hidden;
  `,
  ContactIcon: styled.div`
    background-color: ${(props) => props.theme.colors.ContainerBgColor2};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    height: 42px;
    width: 42px;
    margin-right: 10px;
    color: ${(props) => props.theme.colors.textOnContainerColor};
    fill: ${(props) => props.theme.colors.textOnContainerColor};
    transition: background-color 0.2s ease, color 0.05s ease, fill 0.05s ease;

    .leetcode-icon {
      padding: 6px 7px 8px 7px;
      transition: all 0.25s ease;
    }
  `,
  ContactItemDetails: styled.div`
    display: flex;

    .item-span-title {
      color: white;

      @include mobileHorizontal {
        display: none;
      }
    }

    .item-span {
      color: ${(props) =>
        props.theme.colors.subtextOnContainerColor} !important;
      padding-left: 5px !important;
      transition: all 0.2s linear;
      text-decoration: none !important;
      cursor: pointer;

      overflow: hidden !important;
      text-overflow: ellipsis !important;
      white-space: nowrap !important;
      max-width: 200px !important;

      @media (min-height: ${mobileHeightMin}) {
        @media (max-width: ${mobileWidthMax}) {
          max-width: 150px;
          min-width: 150px;
        }
      }
    }
  `,

  // message
  MessageContainer: styled.div`
    margin-top: 0px;
    height: 0px;
    transition: all 0.3s ease;
    overflow-y: hidden;
    position: absolute;
    bottom: 50px;

    z-index: 2;

    &.active {
      margin-top: 30px;
      height: 60px;
    }
  `,
  Message: styled.div`
    background-color: ${(props) => props.theme.colors.primaryColor};
    color: ${(props) => props.theme.colors.textOnPrimaryColor};
    font-size: 24px;
    font-weight: 600;
    letter-spacing: 1px;
    font-family: din-2014, sans-serif;
    padding: 5px 20px;
    margin: 15px 0px;

    background: linear-gradient(
      130deg,
      ${(props) => props.theme.colors.primaryColor},
      ${(props) => props.theme.colors.primaryColor},
      ${(props) => props.theme.colors.primaryColor},
      ${(props) => props.theme.colors.primaryColor},
      ${(props) => props.theme.colors.primaryColor},
      ${(props) => props.theme.colors.primaryColor},
      ${(props) => props.theme.colors.primaryColorAnimation},
      ${(props) => props.theme.colors.primaryColor},
      ${(props) => props.theme.colors.primaryColor},
      ${(props) => props.theme.colors.primaryColor},
      ${(props) => props.theme.colors.primaryColor},
      ${(props) => props.theme.colors.primaryColor},
      ${(props) => props.theme.colors.primaryColor}
    );
    -webkit-animation: animated-logo 2.7s ease infinite;
    -moz-animation: animated-logo 2.7s ease infinite;
    animation: animated-logo 2.7s ease infinite;
    background-size: 300% 300%;

    z-index: 2;

    -webkit-clip-path: polygon(
      ${buttonNotch} 0%,
      100% 0,
      100% calc(100% - ${buttonNotch}),
      calc(100% - ${buttonNotch}) 100%,
      0 100%,
      0% ${buttonNotch}
    );
    clip-path: polygon(
      ${buttonNotch} 0%,
      100% 0,
      100% calc(100% - ${buttonNotch}),
      calc(100% - ${buttonNotch}) 100%,
      0 100%,
      0% ${buttonNotch}
    );

    @-webkit-keyframes animated-logo {
      0% {
        background-position: 96% 100%;
      }

      100% {
        background-position: 5% 0%;
      }
    }
    @-moz-keyframes animated-logo {
      0% {
        background-position: 96% 100%;
      }

      100% {
        background-position: 5% 0%;
      }
    }
    @keyframes animated-logo {
      0% {
        background-position: 96% 100%;
      }

      100% {
        background-position: 5% 0%;
      }
    }
  `,
};

export default ContactSC;
