import {
  red_PrimaryColor,
  red_PrimaryColorFaded,
  red_PrimaryColorAnimation,
  red_textOnPrimaryColor,
} from "./ThemeBase";

// light imports
import {
  light_BackgroundColor,
  light_NavBgColor,
  light_NavBgColorStart,
  light_textOnSkillColor,
  light_textOnBgColor,
  light_textOnContainerColor,
  light_subtextOnContainerColor,
  light_ContainerBgColor,
  light_ContainerBgColor2,
  light_logo_border,
  light_pageCornerColor,
  light_ScrollThumbColorHover,
  light_ScrollThumbColor,
  light_ThemeContainerBgColor,
  light_CurrentImgBorderColor,
  light_MM_BackgroundColor,
  light_MM_ContainerColor,
} from "./ThemeBase";

const lightRedTheme = {
  name: "lightRedTheme",
  type: "light",
  primary: "red",
  theme2: "RedTheme",
  colors: {
    // core
    primaryColor: red_PrimaryColor, // primary
    primaryColorFaded: red_PrimaryColorFaded, // primary
    primaryColorAnimation: red_PrimaryColorAnimation, // primary
    backgroundColor: light_BackgroundColor,
    NavBgColor: light_NavBgColor,
    NavBgColorStart: light_NavBgColorStart,
    textOnPrimaryColor: red_textOnPrimaryColor,
    textOnSkillColor: light_textOnSkillColor,
    textOnBgColor: light_textOnBgColor,
    textOnContainerColor: light_textOnContainerColor,
    subtextOnContainerColor: light_subtextOnContainerColor,
    ContainerBgColor: light_ContainerBgColor,
    ContainerBgColor2: light_ContainerBgColor2,
    // misc
    logoBorder: light_logo_border,
    pageCornerColor: light_pageCornerColor, // primary
    ScrollThumbColorHover: light_ScrollThumbColorHover,
    ScrollThumbColor: light_ScrollThumbColor,
    ScrollThumbContainerColorHover: red_PrimaryColor, // primary
    ScrollThumbContainerColor: red_PrimaryColorFaded, // primary faded
    themeContainerBgColor: light_ThemeContainerBgColor,
    currentImgBorderColor: light_CurrentImgBorderColor,
    mm_BackgroundColor: light_MM_BackgroundColor,
    mm_ContainerColor: light_MM_ContainerColor,
  },
};

export default lightRedTheme;
