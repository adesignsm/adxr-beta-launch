import React, { useEffect } from "react";
import $ from "jquery";
import "jquery-ui-bundle";
import "./root.css";
import useLocalStorage from "use-local-storage";

import backToTopButton from "./Assets/Logos/back-to-top-black.svg";

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

  const handleBackToTop = (e) => {
    let targetPositionUpward = $('body').offset().top;
    let targetPositionDownward = $("#introduction").prop("scrollHeight");

    console.log(e);
        
    if (e.target.classList.contains("flip-down")) {
      $("#introduction").animate({opacity: "1"}, 700);
      $('html, body').animate({
        scrollTop: targetPositionDownward - 150
      }, 2000);

      setTimeout(() => {
        e.target.classList.replace("flip-down", "flip-up");
      }, 1000);

    } else if (e.target.classList.contains("flip-up")) {
      $("#introduction").animate({opacity: "0"}, 700);
      $('html, body').animate({
        scrollTop: targetPositionUpward
      }, 1000);

      setTimeout(() => {
        e.target.classList.replace("flip-up", "flip-down");
      }, 1000);
    }
  }

  return (
    <div className="main" data-theme={theme}>
      <label className="switch fade-in switch-theme">
        <input className="" id="switch-theme" onClick={switchTheme} type="checkbox" />
        <span className="slider round"></span>
      </label>

      <Entry />
      <Footer />

      <img className="back-to-top flip-down" id="back-to-top-button" src={backToTopButton} onClick={handleBackToTop}/>
    </div>
  );
};

export default App;
