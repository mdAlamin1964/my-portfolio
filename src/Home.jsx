import React from 'react'

export default function Home({portfolio,  skill1}) {
    return (
            <main className="home--main">
                <div className="home--main--hero">
                    <div className="home--heading">
                        <div className="heading--name">
                            <h1 className="heading--name--first">
                                Mohammad
                            </h1>
                            <h1 className="heading--name--last">
                                AlAmin
                            </h1>
                        </div>
                        <div className="heading--left">
                            <ul>
                                <li className="heading--left--item">
                                    {skill1[0]}
                                </li>
                                <li className="heading--left--item">
                                    {skill1[1]}
                                </li>
                            </ul>
                        </div>
                        <div className="heading--bottom--text">
                            
                        </div>
                    </div>
                </div>
                <section className="home--main--portfolio">
                    {/* PORTFOLIO SACTION */}
                        {portfolio}
                </section>
            </main>
    )
}