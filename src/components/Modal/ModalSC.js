import styled from "styled-components";

import {
  mobileHeightMin,
  mobileWidthMax,
  mobileKeyboardHeightMax,
} from "../../themes/SC";

const ModalSC = {
  ModalPage: styled.div`
    width: 100vw;
    min-height: 100vh;
    max-height: 100vh;
    position: fixed;

    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    z-index: 100;

    &.open {
      bottom: 0px;
      z-index: 100;
    }

    &.close {
      z-index: 100;
      bottom: -2000px;
    }

    @media (max-height: ${mobileKeyboardHeightMax}) {
      @media (max-width: ${mobileWidthMax}) {
        display: none;
      }
    }
  `,
  ModalBackground: styled.div`
    background-color: ${(props) => props.theme.colors.mm_BackgroundColor};
    backdrop-filter: blur(3px);
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
  ModalContainer: styled.div`
    background-color: ${(props) => props.theme.colors.mm_ContainerColor};
    max-width: 80vw;
    min-width: 80vw;
    min-height: 80vh;
    max-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: -2000px;
    transform: translateY(50%);

    z-index: 3;
    transition: all ease 0.5s;

    &.open {
      bottom: 50%;
    }

    &.close {
      bottom: -2000px;
    }

    .close-icon {
      position: absolute;
      top: 20px;
      right: 20px;
      color: ${(props) => props.theme.colors.textOnContainerColor};
      z-index: 4;
      cursor: pointer;
      background-color: crimson;
      border-radius: 50px;
      opacity: 0.4;
      transition: all ease 0.15s;

      &:hover {
        opacity: 1;
      }

      min-width: 30px;
      max-width: 30px;
      max-height: 30px;
      min-height: 30px;
    }

    .arrow-icon {
      position: absolute;
      color: ${(props) => props.theme.colors.textOnBgColor};
      z-index: 4;
      cursor: pointer;
      opacity: 0.4;
      transition: all ease 0.15s;
      top: 50%;
      transform: translateY(-50%);

      &:hover {
        opacity: 1;
      }

      min-width: 50px;
      max-width: 50px;
      max-height: 50px;
      min-height: 50px;

      &.back {
        left: -70px;
      }

      &.fwd {
        right: -70px;
      }
    }

    @media (min-height: ${mobileHeightMin}) {
      @media (max-width: ${mobileWidthMax}) {
        background-color: transparent;
        max-width: 75vw;
        min-width: 75vw;
        min-height: unset;
        max-height: 80vh;

        .close-icon {
          position: absolute;
          top: 8px;
          right: 8px;
          color: ${(props) => props.theme.colors.textOnContainerColor};
          z-index: 4;
          cursor: pointer;
          background-color: crimson;
          border-radius: 50px;
          opacity: 0.4;
          transition: all ease 0.15s;

          &:hover {
            opacity: 1;
          }

          min-width: 20px;
          max-width: 20px;
          max-height: 20px;
          min-height: 20px;
        }

        .arrow-icon {
          position: absolute;
          color: ${(props) => props.theme.colors.textOnBgColor};
          z-index: 4;
          cursor: pointer;
          opacity: 0.4;
          transition: all ease 0.15s;
          top: 50%;
          transform: translateY(-50%);

          &:hover {
            opacity: 1;
          }

          min-width: 36px;
          max-width: 36px;
          max-height: 36px;
          min-height: 36px;

          &.back {
            left: -45px;
          }

          &.fwd {
            right: -45px;
          }
        }
      }
    }
  `,

  ModalImg: styled.img`
    object-fit: cover;
    max-width: 80vw;
    min-height: 80vh;
    max-height: 80vh;

    @media (min-height: ${mobileHeightMin}) {
      @media (max-width: ${mobileWidthMax}) {
        object-fit: contain;
        max-width: 75vw;
        min-width: 75vw;
        min-height: unset;
        max-height: 80vh;
      }
    }
  `,

  ImageCountContainer: styled.div`
    position: absolute;
    bottom: -40px;
    color: ${(props) => props.theme.colors.textOnBgColor};
    opacity: 0.6;
    font-size: 20px;
    font-family: din-2014, sans-serif;
    font-weight: 700;
  `,
};

export default ModalSC;
