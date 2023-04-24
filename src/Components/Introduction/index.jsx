import React, { useEffect, useState } from "react";
import "./introduction.css";
import logoBlack from "../../Assets/Logos/logo_black.png";
import logoWhite from "../../Assets/Logos/logo_white.png";


const Introduction = () => {


  const [logo, setLogo] = useState(logoBlack);

  const darkMode = document.getElementById("switch-theme");
/*
  const changeLogo = () => {
    setLogo(logoWhite)

    return(
      logo
    )
  };
*/
 // darkMode.addEventListener("click", changeLogo);




  const Intro = () => {

    return (
      <div className="fade-in introduction" id="introduction">
        <img className="logo-black" id="logoBlack" src={logoBlack} />
        <img className="logo-white" id="logoWhite" src={logoWhite} />
        <p className="introduction__content">
          ADXR, based in Toronto, Canada, is an organization aimed at bringing
          multidisciplinary artists, designers and thinkers together to develop
          work collectively.
          <br />
          <br />
          Full launch coming soon.
        </p>
      </div>
    );
  };

  return (
    <>
      <Intro />
    </>
  );
};

export default Introduction;
