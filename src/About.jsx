import React from "react";
export default function About({image}) {
    return (
        <div className="contact">
            <div className="contact-left">
                <img className="contact-hero-image" src={image} alt="" />
            </div>
            <div className="contact-right">
                <div className="contact-name">
                    <h1 className="contact-name-first">
                        Mohammad
                    </h1>
                    <h1 className="contact-name-last">
                        AlAmin
                    </h1>
                </div>

                <div className="contact-paragraph">
                    <p>
                    Hi, I'm Mohammad Alamin, I build Web applications.
                    Enhance your business with my service and professionalism. I will help you to meet your expectations. 
                    The website will follow the recommendations such as color scheme branding and your taste. The website will support cross-browser, including Firefox, Chrome, and Safari, as well as Tabs and Mobile devices. 
                     </p>
                </div>

                <div className="contact-right-bottom">
                    <div className="expiriance">
                        <span className="expiriance-years">5</span>
                        <span className="expiriance-text">Years of Work</span>
                    </div>
                    <div className="expiriance-social">
                        <a href="https://www.instagram.com/al_design_code/" target="_blanck"><span className="instagram">Instagram</span></a>
                        <a href="https://www.facebook.com/alaminn1964/" target="_blanck"><span className="facebook">Facebook</span></a>
                    </div>
                </div>
            </div>
        </div>
    )
}