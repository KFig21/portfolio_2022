import React, { useEffect, useState } from "react";
import Logo from "./Logo/Logo";
import NavSC from "./NavSC";
import LeetCodeIcon from "./Logo/LeetCodeIcon";
import {
  Mail,
  GitHub,
  LinkedIn,
  RadioButtonChecked,
  RadioButtonUnchecked,
} from "@material-ui/icons";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Brightness5Icon from "@mui/icons-material/Brightness5";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import ResumeModal from "./resume/ResumeModal";

export default function Nav({
  scrollProgress,
  theme,
  theme1,
  theme2,
  handleSetTheme,
  allThemes,
  setShowMobileMenu,
  currentPage,
  setCurrentPage,
}) {
  const [solidNav, setSolidNav] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [floating, setFloating] = useState(false);

  useEffect(() => {
    // nav background color
    let breakPoint = 4;
    if (scrollProgress > breakPoint) {
      setSolidNav(true);
    } else if (scrollProgress <= breakPoint) {
      setSolidNav(false);
    }

    // nav current page underline
    if (scrollProgress > 91) {
      setCurrentPage("contact");
    } else if (scrollProgress > 68) {
      setCurrentPage("skills");
    } else if (scrollProgress > 41) {
      setCurrentPage("projects");
    } else if (scrollProgress > 18) {
      setCurrentPage("about");
    } else {
      setCurrentPage("home");
    }
  }, [scrollProgress]);

  const handleCopyValue = (value) => {
    navigator.clipboard.writeText(value);
    setFloating(true);
    setTimeout(() => {
      setFloating(false);
    }, 1000);
    setTimeout(() => {
      setShowEmail(false);
    }, 1500);
  };

  return (
    <NavSC.Nav className={solidNav}>
      <NavSC.NavWrapper>
        {/* MOBILE HAMBURGER */}
        <NavSC.HamburgerContainer
          className="hamburger-container"
          onClick={() => setShowMobileMenu(true)}
        >
          <MenuIcon className="hamburger" />
        </NavSC.HamburgerContainer>
        {/* LEFT */}
        <NavSC.NavContainer className="nav-left">
          {/* THEMES */}
          <NavSC.ThemeContainer>
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
            <NavSC.Divider>|</NavSC.Divider>
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
          </NavSC.ThemeContainer>
          {/* GITHUB */}
          <NavSC.NavIcon
            href="https://github.com/KFig21"
            target="_blank"
            rel="noopener noreferrer"
            className={theme.type}
          >
            <GitHub className="nav-icon" />
          </NavSC.NavIcon>
          {/* LINKEDIN */}
          <NavSC.NavIcon
            href="https://www.linkedin.com/in/kevin-figenshu-4748672a/"
            target="_blank"
            rel="noopener noreferrer"
            className={theme.type}
          >
            <LinkedIn className="nav-icon" />
          </NavSC.NavIcon>
          {/* LEETCODE */}
          <NavSC.NavIcon
            href="https://leetcode.com/KFig21/"
            target="_blank"
            rel="noopener noreferrer"
            className={`lc-container ${theme.type}`}
          >
            <LeetCodeIcon />
          </NavSC.NavIcon>
          {/* MAIL */}
          <NavSC.NavIcon className={theme.type}>
            <Mail
              className="nav-icon"
              onClick={() => setShowEmail(!showEmail)}
            />
            <NavSC.MailWrapper
              className={`${showEmail ? "active" : "inactive"}`}
            >
              <NavSC.FloatingText
                className={`floating-text ${floating && "active"}`}
              >
                Copied!
              </NavSC.FloatingText>
              <NavSC.MailContainer
                className={`${showEmail ? "active" : "inactive"}`}
              >
                <ContentCopyIcon
                  className="mail-icon"
                  onClick={() => handleCopyValue("Kevin.Figenshu@gmail.com")}
                />
                Kevin.Figenshu@gmail.com
                <CloseIcon
                  className="mail-icon"
                  onClick={() => setShowEmail(false)}
                />
              </NavSC.MailContainer>
            </NavSC.MailWrapper>
          </NavSC.NavIcon>
          {/* Resume */}
          <ResumeModal theme={theme} />
        </NavSC.NavContainer>
        <NavSC.NavCenter>
          <NavSC.NavLink href="#home">
            <Logo solidNav={solidNav} />
          </NavSC.NavLink>
        </NavSC.NavCenter>
        {/* RIGHT */}
        <NavSC.NavContainer className="nav-right">
          <NavSC.NavLink
            className={`underline ${currentPage === "about" && "active"}`}
            href="#about"
          >
            About
          </NavSC.NavLink>
          <NavSC.NavLink
            className={`underline ${currentPage === "projects" && "active"}`}
            href="#projects"
          >
            Projects
          </NavSC.NavLink>
          <NavSC.NavLink
            className={`underline ${currentPage === "skills" && "active"}`}
            href="#skills"
          >
            Skills
          </NavSC.NavLink>
          <NavSC.NavLink
            className={`underline ${currentPage === "contact" && "active"}`}
            href="#contact"
          >
            Contact
          </NavSC.NavLink>
        </NavSC.NavContainer>
      </NavSC.NavWrapper>
    </NavSC.Nav>
  );
}
