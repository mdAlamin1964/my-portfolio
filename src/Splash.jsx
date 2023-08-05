import React from "react";
const Splash = ({onHandle, getMoved, skills}) => (
    <div 
        className={`splash ${getMoved}`} 
        onClick={onHandle}
    >
        <div className="splash--main">
            <div className="splash--name">
                <h1 className="splash--name--first">
                    Md
                </h1>
                <h1 className="splash--name--last">
                    Al Amin
                </h1>
            </div>
            <div className="splash--left">
                <ul>
                    {skills}
                </ul>
            </div>
            <div className="splash--bottom--text">
                Anywhere click
            </div>
        </div>
        
    </div>
)
export default Splash;