import React from 'react'
import '../../css/Home.css'
import HomeHero from './HomeHero'
import {HomeProvider} from '../../contexts/HomeContext';
import Homecards from './Homecards';


function Home() {

    return (
        <HomeProvider>
            <div className="home-container">
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
        </HomeProvider>
        
    )
}

export default Home
