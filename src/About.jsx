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
                        Md
                    </h1>
                    <h1 className="contact-name-last">
                        AlAmin
                    </h1>
                </div>

                <div className="contact-paragraph">
                    <p>
                    Hi, I'm Md. Al Amin, I am working as a web developer since 2019 in the 
                    freelancing field. I have been working these years with many overseas 
                    companies and individuals. I will love to work with your company. My Service 
                    and experience will help your company to grow more. I love being a 
                    Front-end developer, I am building websites for almost 6 years now, so I can 
                    ensure you with my experience. 
                     </p>
                </div>

                <div className="contact-right-bottom">
                    <div className="expiriance">
                        <span className="expiriance-years">6</span>
                        <span className="expiriance-text">Years of Work</span>
                    </div>
                    <div className="expiriance-social">
                        <a href="https://www.linkedin.com/in/alamin1964/" target="_blanck"><span className="instagram">linkedin</span></a>
                        <a href="https://www.facebook.com/alaminn1964/" target="_blanck"><span className="facebook">Facebook</span></a>
                    </div>
                </div>
            </div>
        </div>
    )
}