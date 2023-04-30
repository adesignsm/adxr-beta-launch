import React from "react";
import "./root.css";
import useLocalStorage from "use-local-storage";

import Entry from "./Components/Entry";

const App = () => {
  //Dark Mode
  const defaultLight = window.matchMedia(
    "(prefers-color-scheme: light)"
  ).matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultLight ? "light" : "dark"
  );

  //Toggle between 'light' and 'dark' mode
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className="main" data-theme={theme}>
      <button className="fade-in switch-theme" id="switch-theme" onClick={switchTheme}>
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
      <Entry />
    </div>
  );
};

export default App;
