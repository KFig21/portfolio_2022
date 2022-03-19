import {
  yellow_PrimaryColor,
  yellow_PrimaryColorFaded,
  yellow_PrimaryColorAnimation,
  yellow_textOnPrimaryColor,
} from "./ThemeBase";

// light imports
import {
  light_BackgroundColor,
  light_NavBgColor,
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

const lightYellowTheme = {
  name: "lightYellowTheme",
  type: "light",
  primary: "yellow",
  theme2: "YellowTheme",
  colors: {
    // core
    primaryColor: yellow_PrimaryColor, // primary
    primaryColorFaded: yellow_PrimaryColorFaded, // primary
    primaryColorAnimation: yellow_PrimaryColorAnimation, // primary
    backgroundColor: light_BackgroundColor,
    NavBgColor: light_NavBgColor,
    textOnPrimaryColor: yellow_textOnPrimaryColor,
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
    ScrollThumbContainerColorHover: yellow_PrimaryColor, // primary
    ScrollThumbContainerColor: yellow_PrimaryColorFaded, // primary faded
    themeContainerBgColor: light_ThemeContainerBgColor,
    currentImgBorderColor: light_CurrentImgBorderColor,
    mm_BackgroundColor: light_MM_BackgroundColor,
    mm_ContainerColor: light_MM_ContainerColor,
  },
};

export default lightYellowTheme;
