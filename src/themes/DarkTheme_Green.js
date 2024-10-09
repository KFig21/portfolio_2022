// yellow imports
import {
  green_PrimaryColor,
  green_PrimaryColorFaded,
  green_PrimaryColorAnimation,
  green_textOnPrimaryColor,
} from "./ThemeBase";

// dark imports
import {
  dark_BackgroundColor,
  dark_NavBgColor,
  dark_NavBgColorStart,
  dark_textOnSkillColor,
  dark_textOnBgColor,
  dark_textOnContainerColor,
  dark_subtextOnContainerColor,
  dark_ContainerBgColor,
  dark_ContainerBgColor2,
  dark_logo_border,
  dark_ThemeContainerBgColor,
  dark_CurrentImgBorderColor,
  dark_MM_BackgroundColor,
  dark_MM_ContainerColor,
  dark_ScrollbarTrackColor
} from "./ThemeBase";

// THEME
const darkGreenTheme = {
  name: "darkGreenTheme",
  type: "dark",
  primary: "green",
  theme2: "GreenTheme",
  colors: {
    // core
    primaryColor: green_PrimaryColor, // primary
    primaryColorFaded: green_PrimaryColorFaded, // primary faded
    primaryColorAnimation: green_PrimaryColorAnimation, // primary
    backgroundColor: dark_BackgroundColor,
    scrollbarTrackColor: dark_ScrollbarTrackColor,
    NavBgColor: dark_NavBgColor,
    NavBgColorStart: dark_NavBgColorStart,
    textOnPrimaryColor: green_textOnPrimaryColor,
    textOnSkillColor: dark_textOnSkillColor,
    textOnBgColor: dark_textOnBgColor,
    textOnContainerColor: dark_textOnContainerColor,
    subtextOnContainerColor: dark_subtextOnContainerColor,
    ContainerBgColor: dark_ContainerBgColor,
    ContainerBgColor2: dark_ContainerBgColor2,
    // misc
    logoBorder: dark_logo_border,
    pageCornerColor: green_PrimaryColor, // primary
    ScrollThumbColorHover: green_PrimaryColor, // primary
    ScrollThumbColor: green_PrimaryColorFaded, // primary faded
    ScrollThumbContainerColorHover: green_PrimaryColor, // primary
    ScrollThumbContainerColor: green_PrimaryColorFaded, // primary faded
    themeContainerBgColor: dark_ThemeContainerBgColor,
    currentImgBorderColor: dark_CurrentImgBorderColor,
    mm_BackgroundColor: dark_MM_BackgroundColor,
    mm_ContainerColor: dark_MM_ContainerColor,
  },
};

export default darkGreenTheme;
