// blue imports
import {
  blue_PrimaryColor,
  blue_PrimaryColorFaded,
  blue_PrimaryColorAnimation,
  blue_textOnPrimaryColor,
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
const darkBlueTheme = {
  name: "darkBlueTheme",
  type: "dark",
  primary: "blue",
  theme2: "BlueTheme",
  colors: {
    // core
    primaryColor: blue_PrimaryColor, // primary
    primaryColorFaded: blue_PrimaryColorFaded, // primary faded
    primaryColorAnimation: blue_PrimaryColorAnimation, // primary
    backgroundColor: dark_BackgroundColor,
    scrollbarTrackColor: dark_ScrollbarTrackColor,
    NavBgColor: dark_NavBgColor,
    NavBgColorStart: dark_NavBgColorStart,
    textOnPrimaryColor: blue_textOnPrimaryColor,
    textOnSkillColor: dark_textOnSkillColor,
    textOnBgColor: dark_textOnBgColor,
    textOnContainerColor: dark_textOnContainerColor,
    subtextOnContainerColor: dark_subtextOnContainerColor,
    ContainerBgColor: dark_ContainerBgColor,
    ContainerBgColor2: dark_ContainerBgColor2,
    // misc
    logoBorder: dark_logo_border,
    pageCornerColor: blue_PrimaryColor, // primary
    ScrollThumbColorHover: blue_PrimaryColor, // primary
    ScrollThumbColor: blue_PrimaryColorFaded, // primary faded
    ScrollThumbContainerColorHover: blue_PrimaryColor, // primary
    ScrollThumbContainerColor: blue_PrimaryColorFaded, // primary faded
    themeContainerBgColor: dark_ThemeContainerBgColor,
    currentImgBorderColor: dark_CurrentImgBorderColor,
    mm_BackgroundColor: dark_MM_BackgroundColor,
    mm_ContainerColor: dark_MM_ContainerColor,
  },
};

export default darkBlueTheme;
