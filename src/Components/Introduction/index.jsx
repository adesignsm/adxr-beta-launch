import React from "react";
import "./introduction.css";
import logoBlack from "../../Assets/Logos/logo_black.png";

import $ from "jquery";
import "jquery-ui-bundle";

const Introduction = () => {



  const Intro = () => {

    return (
      <div className="fade-in introduction" id="introduction">
        <img className="logo-black" id="logoBlack" src={logoBlack} />
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
