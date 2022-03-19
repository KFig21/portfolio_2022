import { useState, useEffect, createRef } from "react";
// themes
import { ThemeProvider } from "styled-components";
import lightYellowTheme from "./themes/LightTheme_Yellow";
import darkYellowTheme from "./themes/DarkTheme_Yellow";
import SC from "./themes/SC";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Background from "./components/Background/Background";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import darkGreenTheme from "./themes/DarkTheme_Green";
import lightGreenTheme from "./themes/LightTheme_Green";
import darkRedTheme from "./themes/DarkTheme_Red";
import lightRedTheme from "./themes/LightTheme_Red";
import darkBlueTheme from "./themes/DarkTheme_Blue";
import lightBlueTheme from "./themes/LightTheme_Blue";
import MobileMenu from "./components/MobileMenu/MobileMenu";

function App() {
  const allThemes = [
    darkYellowTheme,
    lightYellowTheme,
    darkGreenTheme,
    lightGreenTheme,
    darkRedTheme,
    lightRedTheme,
    darkBlueTheme,
    lightBlueTheme,
  ];
  const [theme, setTheme] = useState(darkYellowTheme);
  // const [theme, setTheme] = useState(lightYellowTheme);
  const [theme1, setTheme1] = useState("dark");
  const [theme2, setTheme2] = useState("YellowTheme");
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");

  // scroll functionality for nav
  const target = createRef();
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollListener = () => {
    if (!target.current) {
      return;
    }

    const element = target.current;
    const windowScroll = element.scrollTop; // Distance of the scrollbar from the leftmost point
    const totalHeight = element.scrollHeight - element.clientHeight; // Total width the scrollbar can traverse
    if (windowScroll === 0) {
      return setScrollProgress(0);
    }

    if (windowScroll > totalHeight) {
      return setScrollProgress(100);
    }
    setScrollProgress((windowScroll / totalHeight) * 100);
  };

  const handleSetTheme = (theme, type) => {
    if (type === 1) {
      setTheme1(theme);
      const newThemeString = `${theme}${theme2}`;
      const newTheme = allThemes.filter(
        (theme) => theme.name === newThemeString
      );
      setTheme(...newTheme);
    } else if (type === 2) {
      setTheme2(theme);
      const newThemeString = `${theme1}${theme}`;
      const newTheme = allThemes.filter(
        (theme) => theme.name === newThemeString
      );
      setTheme(...newTheme);
    }
  };

  useEffect(() => {
    target.current.addEventListener("scroll", scrollListener);
    return () =>
      target.current &&
      target.current.removeEventListener("scroll", scrollListener);
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <SC.AppContainer ref={target}>
          <Nav
            scrollProgress={scrollProgress}
            theme={theme}
            theme1={theme1}
            theme2={theme2}
            handleSetTheme={handleSetTheme}
            allThemes={allThemes}
            setShowMobileMenu={setShowMobileMenu}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
          <MobileMenu
            showMobileMenu={showMobileMenu}
            setShowMobileMenu={setShowMobileMenu}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            theme={theme}
            allThemes={allThemes}
            theme1={theme1}
            theme2={theme2}
            handleSetTheme={handleSetTheme}
          />
          <Home />
          <About />
          <Projects />
          <Skills />
          <Contact />
          <Background theme={theme} />
        </SC.AppContainer>
      </div>
    </ThemeProvider>
  );
}

export default App;
