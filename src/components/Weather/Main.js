import React, {useContext} from 'react'
import {WeatherContext} from '../../contexts/WeatherContext'
import ForecastCard from './ForecastCard';
import HourlyCard from './HourlyCard';
import Icon from './Icon';
import DownArrow from '../../svg-components/DownArrow'

function Main() {

    const {current, forecasted, day} = useContext(WeatherContext);

    const dateBuilder = date => {
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        let day = days[date.getDay()];
        return (`${day}, ` + (date.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true})));
    }

    const descBuilder = desc => {
        let descwords = desc.split(" ");
        for(let i = 0; i < descwords.length; i++){
            descwords[i] = descwords[i][0].toUpperCase() + descwords[i].substr(1);
        }
        return (descwords.join(" "));
    }
    
    return (
        <div className="main">

            {(typeof current.main != "undefined") ? (
            <div className="main-container">
                <div className="weather-container">
                    <div className="current-container">
                        <div className="conditions-container">
                            <h1 id="city">{current.name}, {current.sys.country}</h1>
                            <p id="date">{dateBuilder(new Date())}</p>
                            <p id="temperature">{Math.round(current.main.temp)}°F</p>
                            <p id="condition">{descBuilder(current.weather[0].description)}</p>
                        </div>
                        <div className="weather-icon-container">
                            <Icon code={current.weather[0].icon} width={200} height={200}/>
                        </div>
                    </div> 

                    <div className="current-dropdown-container">
                        <button className="current-dropdown">
                            <DownArrow width={30} height={30}/>
                        </button>
                    </div>

                </div>

                {(typeof forecasted.hourly != 'undefined') ? (
                    <div className="hourly-container">
                        {forecasted.hourly.slice(0,5).map((hourly, index) => {
                            return (
                                <HourlyCard key={index}
                                hourlytime={hourly.dt}
                                hourlypop={hourly.pop}
                                code={hourly.weather[0].icon}
                                temp={hourly.feels_like}
                                />
                            )}
                        )}
                    </div>
                ) : ('')}
                

                {( typeof forecasted.daily != 'undefined' ) ? (
                    <div className="forecast-container">
                        {forecasted.daily.slice(0,6).map((info,index) => {
                            return (
                                <ForecastCard key={index} 
                                    currentday={day} 
                                    weekday={info.dt} 
                                    day={info.dt} 
                                    condition={descBuilder(info.weather[0].description)}
                                    high={info.temp.max} 
                                    low={info.temp.min} 
                                    dailypop={info.pop}
                                    wind={info.wind_speed}
                                    code={info.weather[0].icon} 
                                    width={50} height={50}
                                />
                            )
                        })}    
                    </div>
                ) : ('')}
                

            </div>
            ) : ('')}
        </div>
    )
}

export default Main
