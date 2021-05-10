import React from 'react'
import '../../css/Home.css'
import HomeHero from './HomeHero'
import {HomeProvider} from '../../contexts/HomeContext';
import NewsSection from './NewsSection';

function Home() {

    return (
        <HomeProvider>
            <div className="home-container">
                <HomeHero/>
                <div className="home-content">
                    <NewsSection/>
                </div>
            </div>
        </HomeProvider>
        
    )
}

export default Home
