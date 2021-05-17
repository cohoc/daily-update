import React from 'react'
import DUlogo from '../../svg/HomeIcons/duhomeicon.svg'

function HomeHero() {
    return (
        <div className="home-hero-container">
            <div className="home-hero">
                <div className="hero dark-blur">

                    <div className="hero-content-container">

                        

                        <div className="hero-text-container">
                            <div className="hero-text-content">
                                <h1 id="hero-text-main">
                                    All the relevant info.
                                </h1>
                                <h2 id="hero-text-sub">
                                    When you need it.
                                </h2>
                                <h2 id="hero-text-sub">
                                    Wherever you are.
                                </h2>
                            </div>
                        </div>

                        <div className="hero-logo-container">
                            <img src={DUlogo} alt="Logo" width={200} height={200} />  
                        </div>

                    </div>

                </div>
            </div>
        </div>
        
    )
}

export default HomeHero
