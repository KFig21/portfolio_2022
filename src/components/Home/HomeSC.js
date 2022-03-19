import styled from "styled-components";

import { navHeight, mobileWidthMax, mobileHeightMin } from "../../themes/SC";

const notch = "34px";

const HomeSC = {
  // App.js
  HomeContainer: styled.div`
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

  HomeTitle: styled.span`
    color: ${(props) => props.theme.colors.textOnBGColor};
    font-size: 120px;
    font-weight: 900;
    letter-spacing: 2px;
    font-style: italic;
    z-index: 2;
    font-family: din-condensed, sans-serif;

    @media (min-height: ${mobileHeightMin}) {
      @media (max-width: ${mobileWidthMax}) {
        font-size: 70px;
        text-align: center;
      }
    }
  `,

  HomeSubtextContainer: styled.div`
    display: flex;
  `,
  HomeSubtextWrapper: styled.div`
    display: flex;
    width: 100%;
    padding: 10px;
    overflow: hidden;

    z-index: 2;

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

  HomeSubtext: styled.span`
    color: ${(props) => props.theme.colors.textOnPrimaryColor};
    background-color: ${(props) => props.theme.colors.primaryColor};
    font-size: 40px;
    font-weight: 900;
    letter-spacing: 1.5px;
    padding: 10px 25px;
    line-height: 30px;
    overflow: visible;
    z-index: 2;
    font-family: din-condensed, sans-serif;

    &.cursor {
      padding: 10px 0px 10px 27px;
    }
    &.text {
      font-style: italic;
      padding: 10px 27px 10px 10px;
    }
  `,
  HomeSubtextSpace: styled.span`
    color: ${(props) => props.theme.colors.textOnBGColor};
    font-size: 28px;
    font-weight: 900;
    letter-spacing: 1.5px;
    padding: 0px 20px;
    font-style: italic;
    z-index: 2;
    font-family: din-condensed, sans-serif;
    align-self: center;
  `,
};

export default HomeSC;
