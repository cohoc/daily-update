import React from 'react'
import Icon from './Icon'

function ForecastCard(props) {

    const dayBuilder = day => {
        let date = new Date(day * 1000);
        let month = date.getMonth() + 1;
        let currday = date.getDate();
        return(`${month} / ${currday}`);
    }

    const weekdayBuilder = (date, currentday) => {
        let weekdays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
        let weekday = new Date(date * 1000);
        let day = weekdays[weekday.getDay()];
        if(weekday.getDay() === currentday){
            return("TODAY")
        }
        else{
            return (`${day}`)
        }
        
    }

    return (
        <div className="forecast-card">
            
            <div className="fc-day-container">
                <p id="weekday">{weekdayBuilder(props.weekday, props.currentday)}</p>
                <p id="day">{dayBuilder(props.day)}</p>  
            </div>


            <div className="fc-con-container">
                <Icon code={props.code} width={50} />
                <p id="fc-condition">{props.condition}</p>
            </div>


            <div className="fc-precip">
                <Icon code={"precipitation"} width={20} />
                <p id="precipitation">{(props.dailypop * 100).toFixed(0)} %</p>
            </div>


            {/*<div className="fc-windy">
                <Icon code={"windy"} width={25} />
                <p id="wind">{Math.round(props.wind)} mph</p>
            </div>*/}

            <div className="fc-temp-container">
                <p id="high">{Math.round(props.high)}°</p>
                <span id="divider"> / </span>
                <p id="low">{Math.round(props.low)}°</p>
            </div>

        </div>
    )
}

export default ForecastCard
