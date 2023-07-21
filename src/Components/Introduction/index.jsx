import React, {useEffect, useState} from "react";
import "./introduction.css";
import logoBlack from "../../Assets/Logos/logo_black.svg";
import Mail from "../Mail/Mail";
import sanityClient from "../../client";

const Introduction = () => {
  const [introductionContent, setIntroductionContent] = useState([]);
  
  useEffect(() => {
    sanityClient.fetch(
      `*[_type == "text_content"]{
        introduction_description,
      }`
    ).then((data) => {
      setIntroductionContent(data[0]);
    }).catch((err) => {
      console.error(err);
    })
  }, []);

  const Intro = () => {

    return (
      <div className="fade-in introduction" id="introduction">
        <img className="logo-black" id="logoBlack" src={logoBlack} />
        <p className="introduction__content">
          {introductionContent && Object.keys(introductionContent).map((content) => {
            return (
              introductionContent[content]
            )
          })}
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
