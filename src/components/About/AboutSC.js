import styled, { keyframes } from "styled-components";

import { navHeight, mobileWidthMax, mobileHeightMin } from "../../themes/SC";

const gradientAnimation = keyframes`
0% {
  background-position: 0% 50%;
}
50% {
  background-position: 100% 50%;
}
100% {
  background-position: 0% 50%;
}
`;

const notch = "60px";
const notchMobile = "40px";
const imgSize = "300px";

const AboutSC = {
  AboutPage: styled.div`
    background-color: ${(props) => props.theme.colors.backgroundColor};

    width: 100vw;
    min-height: 100vh;
    max-height: 100vh;
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  `,
  AboutContainer: styled.div`
    background-color: ${(props) => props.theme.colors.ContainerBgColor2};
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

  AboutLeft: styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;

    @media (min-height: ${mobileHeightMin}) {
      @media (max-width: ${mobileWidthMax}) {
        padding: 10px;
      }
    }
  `,

  AboutImgContainer: styled.div`
    max-width: 100%;
    min-width: 100%;
    padding: 20px;
    overflow: visible;
    align-items: center;
    justify-content: center;
    display: flex;
    border-radius: 50%;

    @media (min-height: ${mobileHeightMin}) {
      @media (max-width: ${mobileWidthMax}) {
        display: none;
      }
    }
  `,

  AboutImg: styled.img`
    animation: gradient 15s ease infinite;
    border-radius: inherit;
    min-width: ${imgSize};
    max-width: ${imgSize};
    max-height: ${imgSize};
    min-height: ${imgSize};
    object-fit: fill;
    box-shadow: 0px 0px 20px black;
    background-size: 800% 800% !important;

    background: linear-gradient(
      -45deg,
      ${(props) => props.theme.colors.primaryColor} 0%,
      ${(props) => props.theme.colors.primaryColor} 47%,
      ${(props) => props.theme.colors.primaryColorAnimation} 50%,
      ${(props) => props.theme.colors.primaryColor} 53%,
      ${(props) => props.theme.colors.primaryColor} 100%
    );
    animation: ${gradientAnimation} 12s ease infinite;
  `,

  AboutRight: styled.div`
    background-color: ${(props) => props.theme.colors.ContainerBgColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px 20px 20px 40px;

    z-index: 2;

    @media (min-height: ${mobileHeightMin}) {
      @media (max-width: ${mobileWidthMax}) {
        padding: 5px 20px 10px 20px;
      }
    }
  `,

  AboutTitle: styled.a`
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

    z-index: 2;

    @media (min-height: ${mobileHeightMin}) {
      @media (max-width: ${mobileWidthMax}) {
        display: none;
      }
    }
  `,
  AboutTitleMobile: styled.a`
    color: ${(props) => props.theme.colors.textOnContainerColor};
    font-size: 50px;
    font-weight: 900;
    letter-spacing: 1px;
    font-family: din-condensed, sans-serif;
    font-style: italic;
    text-decoration: underline solid 7px
      ${(props) => props.theme.colors.primaryColor};
    text-underline-offset: 5px;
    margin-bottom: 10px;

    z-index: 2;
    display: none;

    @media (min-height: ${mobileHeightMin}) {
      @media (max-width: ${mobileWidthMax}) {
        display: block;
      }
    }
  `,

  AboutInfo: styled.span`
    color: ${(props) => props.theme.colors.textOnContainerColor};
    font-size: 22px;
    font-weight: 600;
    font-family: din-2014, sans-serif;
    max-width: 600px;
    margin: 12px 0px;
    letter-spacing: 0.5px;

    z-index: 2;

    @media (min-height: ${mobileHeightMin}) {
      @media (max-width: ${mobileWidthMax}) {
        font-size: 20px;
      }
    }
  `,

  AboutLWT: styled.span`
    color: ${(props) => props.theme.colors.primaryColor};
    font-size: 22px;
    font-weight: 600;
    font-family: Source Code Pro, din-2014, sans-serif;
    max-width: 600px;
    margin: 6px 0px;

    z-index: 2;
  `,
};

export default AboutSC;
