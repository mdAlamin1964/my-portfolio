import React from "react";
export default function Contact() {
    const styls = {
        width: "90vw",
        float: "right",
        background: "transparent"
    }

    const headColor = {
        color: "black",
    }

    return (
        <div className="splash" style={styls}>
            <div className="splash--main" style={headColor} >
                <div className="splash--name" >
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
                            Wordpress
                        </li>
                        <li className="splash--left--item">
                            Dynamic website
                        </li>
                    </ul>
                </div>
                <div className="splash--bottom--text">
                    Facebook
                </div>
            </div>
        </div>
    )
}