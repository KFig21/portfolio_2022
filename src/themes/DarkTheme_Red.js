// yellow imports
import {
  red_PrimaryColor,
  red_PrimaryColorFaded,
  red_PrimaryColorAnimation,
  red_textOnPrimaryColor,
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
} from "./ThemeBase";

// THEME
const darkRedTheme = {
  name: "darkRedTheme",
  type: "dark",
  primary: "red",
  theme2: "RedTheme",
  colors: {
    // core
    primaryColor: red_PrimaryColor, // primary
    primaryColorFaded: red_PrimaryColorFaded, // primary faded
    primaryColorAnimation: red_PrimaryColorAnimation, // primary
    backgroundColor: dark_BackgroundColor,
    NavBgColor: dark_NavBgColor,
    NavBgColorStart: dark_NavBgColorStart,
    textOnPrimaryColor: red_textOnPrimaryColor,
    textOnSkillColor: dark_textOnSkillColor,
    textOnBgColor: dark_textOnBgColor,
    textOnContainerColor: dark_textOnContainerColor,
    subtextOnContainerColor: dark_subtextOnContainerColor,
    ContainerBgColor: dark_ContainerBgColor,
    ContainerBgColor2: dark_ContainerBgColor2,
    // misc
    logoBorder: dark_logo_border,
    pageCornerColor: red_PrimaryColor, // primary
    ScrollThumbColorHover: red_PrimaryColor, // primary
    ScrollThumbColor: red_PrimaryColorFaded, // primary faded
    ScrollThumbContainerColorHover: red_PrimaryColor, // primary
    ScrollThumbContainerColor: red_PrimaryColorFaded, // primary faded
    themeContainerBgColor: dark_ThemeContainerBgColor,
    currentImgBorderColor: dark_CurrentImgBorderColor,
    mm_BackgroundColor: dark_MM_BackgroundColor,
    mm_ContainerColor: dark_MM_ContainerColor,
  },
};

export default darkRedTheme;
