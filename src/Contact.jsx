import React from "react";
export default function Contact({skills}) {
    const styls = {
        width: "90vw",
        float: "right",
        background: "transparent"
    }

    const headColor = {
        color: "black",
    }

    const customStyle = {
        right : "2em",
        color: "#000"
    }

    return (
        <div className="splash" style={styls}>
            <div className="splash--main" style={headColor} >
                <div className="splash--name" >
                    <h1 className="splash--name--first">
                        Md
                    </h1>
                    <h1 className="splash--name--last">
                        AlAmin
                    </h1>
                </div>
                <div className="splash--left" style={customStyle} >
                    <ul>
                        <li>
                            <span>mdalaminhossain1964@gmail.com</span>
                            <a href = "mailto: mdalaminhossain1964@gmail.com"><h2 style={customStyle}>Email me</h2></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}