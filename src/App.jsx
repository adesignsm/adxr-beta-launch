import React from "react";
import "./root.css";
import useLocalStorage from "use-local-storage";

import Entry from "./Components/Entry";
import Footer from "./Components/Footer";

const App = () => {
  const defaultLight = window.matchMedia(
    "(prefers-color-scheme: light)"
  ).matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultLight ? "light" : "dark"
  );

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className="main" data-theme={theme}>
      <label className="switch fade-in switch-theme">
        <input className="" id="switch-theme" onClick={switchTheme} type="checkbox" />
        <span className="slider round"></span>
      </label>

      <Entry />
      <Footer />
    </div>
  );
};

export default App;
