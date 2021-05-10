import React from 'react'
import {Link} from 'react-router-dom'

function HomeHero() {
    return (
        <div className="home-hero">
            <ul className="home-nav-links">
                
                <div className="hero-button-container scale">
                    <Link to="/weather" className="hero-button ">
                        <span className="button-text">WEATHER</span>
                    </Link>
                </div>

                <div className="hero-button-container scale">
                    <button className="hero-button">
                        <span className="button-text">NEWS</span>
                    </button>
                </div>

                <div className="hero-button-container scale">
                    <button className="hero-button">
                        <span className="button-text">COVID</span>
                    </button>
                </div>
            </ul>
        </div>
    )
}

export default HomeHero
