import React from "react";
const Splash = ({onHandle, getMoved, skill1}) => (
    <div 
        className={`splash ${getMoved}`} 
        onClick={onHandle}
    >
        <div className="splash--main">
            <div className="splash--name">
                <h1 className="splash--name--first">
                    Mohammad
                </h1>
                <h1 className="splash--name--last">
                    AlAmin
                </h1>
            </div>
            <div className="splash--left">
                <ul>
                    <li className="splash--left--item">
                        {skill1[0]}
                    </li>
                    <li className="splash--left--item">
                        {skill1[1]}
                    </li>
                </ul>
            </div>
            <div className="splash--bottom--text">
                Anywhere click
            </div>
        </div>
        
    </div>
)
export default Splash;