import React, { useEffect, useState } from "react";
import "./mail.css";

import sanityClient from "../../client";

const Mail = () => {
    const [headline, setHeadline] = useState([]);

    useEffect(() => {
        sanityClient.fetch(
            `*[_type == "newsletter_headline"]{
                newsletter_headline_content,
            }`
        ).then((data) => {
            console.log(data[0]);
            setHeadline(data[0])
        }).catch((err) => {
            console.error(err);
        })
    }, []);

    return (
            <div id="mc_embed_signup" className="dark-mode-mc">
                <form action="https://studio.us9.list-manage.com/subscribe/post?u=f21f26adb65a2efb8d030b9d0&amp;id=9a83e7a7c1&amp;f_id=008e19e1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                    <div id="mc_embed_signup_scroll">
                        <h2>
                            {headline && Object.keys(headline).map((content) => {
                                return (
                                    headline[content]
                                )
                            })}
                        </h2>
                        <div className="indicates-required">
                            <span className="asterisk">*</span> indicates required
                        </div>

                        <div className="mc-field-group">
                            <label htmlFor="mce-EMAIL">Email Address
                                <span className="asterisk">*</span>
                            </label>
                            <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" required />
                            <span id="mce-EMAIL-HELPERTEXT" className="helper_text"></span>
                        </div>

                        <div id="mce-responses" className="clear foot">
                            <div className="response" id="mce-error-response" style={{display: "none"}}></div>
                            <div className="response" id="mce-success-response" style={{display: "none"}}></div>
                        </div>
                        
                        <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true"><input type="text" name="b_f21f26adb65a2efb8d030b9d0_9a83e7a7c1" tabIndex="-1" value="" /></div>
                        <div className="optionalParent">
                            <div className="clear foot">
                                <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" />
                                <p className="brandingLogo"><a href="http://eepurl.com/iqh-UQ" title="Mailchimp - email marketing made easy and fun"><img src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg" /></a></p>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
    )
}

export default Mail;