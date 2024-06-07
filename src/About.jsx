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
                    Hi!, I am certified frontend developer and designer. You can always expect professional service from me. I am highly experienced in frontend development and website builder like WordPress, Divi, Wix, Squarespace etc. I always focus on the quality of my work for my clients. Please check out the amazing feedback of my previous clients. 
                        <br />
                    Thank you, looking forward to working with you. Md. Al Amin
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