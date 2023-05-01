import React from "react";
import "./introduction.css";
import logoBlack from "../../Assets/Logos/logo_black.png";
import Mail from "../Mail/Mail";

import "jquery-ui-bundle";

const Introduction = () => {
  const Intro = () => {

    return (
      <div className="fade-in introduction" id="introduction">
        <img className="logo-black" id="logoBlack" src={logoBlack} />
        <p className="introduction__content">
          Ascensive Design & Xollaborative Research Studio is a rapidly growing multidisciplinary design and consulting 
          agency that provides services in branding, graphic development, product design, marketing and strategy.
          <br />
          <br />
          Full launch coming soon.
        </p>
        <Mail />
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
