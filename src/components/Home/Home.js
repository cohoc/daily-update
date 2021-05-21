import React from 'react'
import '../../css/Home.css'
import HomeHeader from './HomeHeader'
import HomeHero from './HomeHero'
import Homecards from './Homecards';


function Home() {

    return (
        <div className="home-container">
            <HomeHeader/>
            <HomeHero/>
            <section className="home-content">
                <div className="home-button-header">
                    <h1 id="button-header">
                        Features
                    </h1>

                    <div id="line-container">
                        <span id="header-line"></span>
                    </div>

                </div>
                <Homecards/>
            </section>
                
        </div>
        
    )
}

export default Home
