import React, { useEffect, useState } from "react";
import "./introduction.css";
import logoBlack from "../../Assets/Logos/logo_black.png";
import logoWhite from "../../Assets/Logos/logo_white.png";
import $ from "jquery";


const Introduction = () => {

 // const [show, setShow] = useState(false);

  const Intro = () => {
    return (
      <div className="fade-in introduction" id="introduction">
        <img className="logo" id="logo" src={logoBlack} />
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
/*
  useEffect(()=> {
    setTimeout(() => {
      setShow(true)
    }, 8000)
  }, []);
*/
  return (
    <>
      <Intro />
    </>
  );
};

export default Introduction;
