import React from "react";
export default function Sidebar({getMenuNamFunc}) {
    return ( 
        <div className="home--nav">
            <ul className="home--nav--items">
                <li className="home--nav--item">
                    <a onClick={getMenuNamFunc} href="_#" className="home--nav--link ">
                        About
                    </a>
                </li>
                <li className="home--nav--item">
                    <a onClick={getMenuNamFunc}  href="_#" className="home--nav--link ">
                        projects
                    </a>
                </li>
                <li className="home--nav--item">
                    <a onClick={getMenuNamFunc}  href="_#" className="home--nav--link ">
                        Contact
                    </a>
                </li>
            </ul>
        </div>
    )
}