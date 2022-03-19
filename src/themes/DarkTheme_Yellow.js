// yellow imports
import {
  yellow_PrimaryColor,
  yellow_PrimaryColorFaded,
  yellow_PrimaryColorAnimation,
  yellow_textOnPrimaryColor,
} from "./ThemeBase";

// dark imports
import {
  dark_BackgroundColor,
  dark_NavBgColor,
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
} from "./ThemeBase";

// THEME
const darkYellowTheme = {
  name: "darkYellowTheme",
  type: "dark",
  primary: "yellow",
  theme2: "YellowTheme",
  colors: {
    // core
    primaryColor: yellow_PrimaryColor, // primary
    primaryColorFaded: yellow_PrimaryColorFaded, // primary faded
    primaryColorAnimation: yellow_PrimaryColorAnimation, // primary
    backgroundColor: dark_BackgroundColor,
    NavBgColor: dark_NavBgColor,
    textOnPrimaryColor: yellow_textOnPrimaryColor,
    textOnSkillColor: dark_textOnSkillColor,
    textOnBgColor: dark_textOnBgColor,
    textOnContainerColor: dark_textOnContainerColor,
    subtextOnContainerColor: dark_subtextOnContainerColor,
    ContainerBgColor: dark_ContainerBgColor,
    ContainerBgColor2: dark_ContainerBgColor2,
    // misc
    logoBorder: dark_logo_border,
    pageCornerColor: yellow_PrimaryColor, // primary
    ScrollThumbColorHover: yellow_PrimaryColor, // primary
    ScrollThumbColor: yellow_PrimaryColorFaded, // primary faded
    ScrollThumbContainerColorHover: yellow_PrimaryColor, // primary
    ScrollThumbContainerColor: yellow_PrimaryColorFaded, // primary faded
    themeContainerBgColor: dark_ThemeContainerBgColor,
    currentImgBorderColor: dark_CurrentImgBorderColor,
    mm_BackgroundColor: dark_MM_BackgroundColor,
    mm_ContainerColor: dark_MM_ContainerColor,
  },
};

export default darkYellowTheme;
