import React from 'react'
import Icon from './Icon'

function HourlyCard(props) {
    const hourBuilder = date => {
        let time = new Date(date * 1000);
        let hour = time.toLocaleString('en-US', {hour: 'numeric', hour12: true})
        return (`${hour}`)
    }

    return (
        <div className="hourlycard-container">
            <p id="hour-time">{hourBuilder(props.hourlytime)}</p>
            <p id="hour-pop">{(props.hourlypop * 100).toFixed(0)}%</p>
            <Icon code={props.code} width={50}/>
            <p id="hour-temp">{parseInt(props.temp)}°</p>
        </div>
    )
}

export default HourlyCard
