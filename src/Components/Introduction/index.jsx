import React, { useEffect, useState } from "react";
import "./introduction.css";
import logo from "../../Assets/logo.png";

const Introduction = () => {

  const [show, setShow] = useState(false);

  const IntroFadeIn = () => {
    return (
      <div className="fade-in introduction" id="introduction">
        <img className="logo" id="logo" src={logo} />
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

  useEffect(()=> {
    setTimeout(() => {
      setShow(true)
    }, 8000)
  }, []);

  return (
    <>
      { 
        show && <IntroFadeIn />
      }
    </>
  );
};

export default Introduction;
