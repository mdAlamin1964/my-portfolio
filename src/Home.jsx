import React from 'react'

export default function Home({portfolio, skills, portNextBtn, portPrevBtn}) {
    return (
            <main className="home--main">
                <div className="home--main--hero">
                    <div className="home--heading">
                        <div className="heading--name">
                            <h1 className="heading--name--first">
                                Md
                            </h1>
                            <h1 className="heading--name--last">
                                Al Amin
                            </h1>
                        </div>
                        <div className="heading--left">
                            <ul>
                                {skills}
                            </ul>
                        </div>
                        <div className="heading--bottom--text">
                        </div>
                    </div>
                </div>
                
                <div className="arrow">
                    <div className="arrow-left arrow-icon" onClick={portPrevBtn}>
                        <i className="fa fa-angle-left" aria-hidden="true"></i>
                    </div>
                    <div className="arrow-right arrow-icon" onClick={portNextBtn}>
                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </div>
                </div>
                <section className="home--main--portfolio">
                    {/* PORTFOLIO SACTION */}
                        {portfolio}
                </section>
            </main>
    )
}