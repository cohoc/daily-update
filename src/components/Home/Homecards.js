import React from 'react'
import covid from '../../svg/HomeIcons/outline/covid.svg'
import news from '../../svg/HomeIcons/outline/news.svg'
import weather from '../../svg/HomeIcons/outline/weather.svg'


function Homecards() {
    return (
        <div className="home-buttons-container">

            <div className="home-button">
                <div className="icon-container">
                    <img src={covid} className="button-icon" alt="Covid" />
                </div>
                <div className="info-container">
                    <h2 id="info-header">
                        Covid
                    </h2>
                    <p className="button-info card-font" >
                        Relevant COVID-19 data 
                        for your region. 
                        
                    </p>

                    <p className="button-description card-font">
                        Case Counts<br/>
                        Deaths<br/>
                        Vaccinated<br/>
                        Historical data<br/>
                    </p>
                </div>
            </div>

            <div className="home-button">
                <div className="icon-container">
                    <img src={news} className="button-icon" alt="News"/>
                </div>
                <div className="info-container">
                    <h2 id="info-header">
                        News
                    </h2>
                    <p className="button-info card-font">
                        Top and current headlines 
                        in the world. 
                        
                    </p>

                    <p className="button-description card-font">
                        Searchable articles<br/>
                        Categorical news<br/>
                        Local news<br/>
                        
                    </p>
                </div>
            </div>

            <div className="home-button">
                <div className="icon-container">
                    <img src={weather} className="button-icon" alt="Weather"/>
                </div>
                <div className="info-container">
                    <h2 id="info-header">
                        Weather
                    </h2>
                    <p className="button-info card-font">
                        Important weather data 
                        for your location.
                         
                    </p>

                    <p className="button-description card-font">
                        Current weather<br/>
                        Weekly forecast<br/>
                        Hourly data<br/>
                        Alerts<br/>
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Homecards
