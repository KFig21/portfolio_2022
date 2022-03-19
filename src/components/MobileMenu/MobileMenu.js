/* eslint-disable react/jsx-pascal-case */
import React from "react";
import MM_SC from "./MM_SC";
import Logo from "./Logo/Logo";
import LeetCodeIcon from "./Logo/LeetCodeIcon";
import {
  GitHub,
  LinkedIn,
  RadioButtonChecked,
  RadioButtonUnchecked,
} from "@material-ui/icons";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Brightness5Icon from "@mui/icons-material/Brightness5";
import CloseIcon from "@mui/icons-material/Close";

export default function MobileMenu({
  showMobileMenu,
  setShowMobileMenu,
  currentPage,
  setCurrentPage,
  theme,
  allThemes,
  theme1,
  theme2,
  handleSetTheme,
}) {
  return (
    <MM_SC.MM_Page className={`mm-page ${showMobileMenu ? "open" : "close"}`}>
      {/* MENU CONTAINER*/}
      <MM_SC.MM_Container
        className={`mm-container ${showMobileMenu ? "open" : "close"}`}
      >
        {/* CLOSE ICON */}
        <CloseIcon
          className="close-icon"
          onClick={() => setShowMobileMenu(false)}
        />
        {/* MENU */}
        <MM_SC.MM_Wrapper className="mm-wrapper">
          {/* LOGO*/}
          <MM_SC.MM_LogoContainer
            href="#home"
            onClick={() => setShowMobileMenu(false)}
          >
            <Logo />
          </MM_SC.MM_LogoContainer>
          {/* PAGES */}
          <MM_SC.LinkContainer className="mm-pages">
            <MM_SC.NavLink
              className={`underline ${currentPage === "about" && "active"}`}
              href="#about"
              onClick={() => setShowMobileMenu(false)}
            >
              About
            </MM_SC.NavLink>
            <MM_SC.NavLink
              className={`underline ${currentPage === "projects" && "active"}`}
              href="#projects"
              onClick={() => setShowMobileMenu(false)}
            >
              Projects
            </MM_SC.NavLink>
            <MM_SC.NavLink
              className={`underline ${currentPage === "skills" && "active"}`}
              href="#skills"
              onClick={() => setShowMobileMenu(false)}
            >
              Skills
            </MM_SC.NavLink>
            <MM_SC.NavLink
              className={`underline ${currentPage === "contact" && "active"}`}
              href="#contact"
              onClick={() => setShowMobileMenu(false)}
            >
              Contact
            </MM_SC.NavLink>
          </MM_SC.LinkContainer>
          {/* LINKS */}
          <MM_SC.LinkContainer className="mm-links">
            {/* GITHUB */}
            <MM_SC.NavIcon
              href="https://github.com/KFig21"
              target="_blank"
              rel="noopener noreferrer"
              className={theme.type}
            >
              <GitHub className="nav-icon" />
            </MM_SC.NavIcon>
            {/* LINKEDIN */}
            <MM_SC.NavIcon
              href="https://www.linkedin.com/in/kevin-figenshu-4748672a/"
              target="_blank"
              rel="noopener noreferrer"
              className={theme.type}
            >
              <LinkedIn className="nav-icon" />
            </MM_SC.NavIcon>
            {/* LEETCODE */}
            <MM_SC.NavIcon
              href="https://leetcode.com/KFig21/"
              target="_blank"
              rel="noopener noreferrer"
              className={`lc-container ${theme.type}`}
            >
              <LeetCodeIcon />
            </MM_SC.NavIcon>
          </MM_SC.LinkContainer>
          {/* COLORS */}
          <MM_SC.LinkContainer className="mm-colors">
            {/* THEMES */}
            <MM_SC.ThemeContainer>
              <div className="theme-type mode">
                {/* DARK */}
                <DarkModeIcon
                  className={`theme-icon ${theme1 === "dark" && "active"}`}
                  onClick={() => handleSetTheme("dark", 1)}
                />
                {/* LIGHT */}
                <Brightness5Icon
                  className={`theme-icon ${theme1 === "light" && "active"}`}
                  onClick={() => handleSetTheme("light", 1)}
                />
              </div>
              <div className="theme-type">
                {/* COLORS */}
                {allThemes.map((_theme) => {
                  return (
                    <>
                      {/* CHECK IF LIGHT OR DARK MODE */}
                      {theme1 === _theme.type ? (
                        // CHECK IF CURRENT THEME IS CURRENT COLOR
                        theme2 === _theme.theme2 ? (
                          <RadioButtonChecked
                            className={`theme-icon`}
                            style={{ color: _theme.colors.primaryColor }}
                            onClick={() => handleSetTheme(_theme.theme2, 2)}
                          />
                        ) : (
                          <RadioButtonUnchecked
                            className={`theme-icon`}
                            style={{ color: _theme.colors.primaryColor }}
                            onClick={() => handleSetTheme(_theme.theme2, 2)}
                          />
                        )
                      ) : null}
                    </>
                  );
                })}
              </div>
            </MM_SC.ThemeContainer>
          </MM_SC.LinkContainer>
        </MM_SC.MM_Wrapper>
      </MM_SC.MM_Container>
      {/* BACKGROUND */}
      <MM_SC.MM_Background
        className={`mm-background ${showMobileMenu ? "open" : "close"}`}
        onClick={() => setShowMobileMenu(false)}
      ></MM_SC.MM_Background>
    </MM_SC.MM_Page>
  );
}
