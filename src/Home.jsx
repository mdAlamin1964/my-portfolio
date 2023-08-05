import React from 'react'

export default function Home({portfolio, skills}) {
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
                <section className="home--main--portfolio">
                    {/* PORTFOLIO SACTION */}
                        {portfolio}
                </section>
            </main>
    )
}