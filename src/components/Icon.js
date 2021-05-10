import React from 'react'
import day from '../svg/day.svg'
import night from '../svg/night.svg'
import cloudyday from '../svg/cloudyday.svg'
import cloudynight from '../svg/cloudynight.svg'
import foggy from '../svg/foggy.svg'
import partlycloudy from '../svg/partlycloudy.svg'
import brokenclouds from '../svg/brokenclouds.svg'
import snow from '../svg/snow.svg'
import altshowers from '../svg/altshowers.svg'
import altwindy from '../svg/altwindy.svg'
import precipitation from '../svg/chanceofrain.svg'
import thunderstorm from '../svg/thunderstorm.svg'

function Icon(props) {
    
    if(props.code === "01d"){
        return(<img src={day} alt='Clear' width={props.width} height={props.height}/>)
    }

    else if(props.code === "01n"){
        return(<img src={night} alt='Clear' width={props.width} height={props.height}/>)
    }

    else if(props.code === "02d"){
        return(<img src={cloudyday} alt='Cloudy' width={props.width} height={props.height}/>)
    }

    else if(props.code === "02n"){
        return(<img src={cloudynight} alt='Cloudy' width={props.width} height={props.height}/>)
    }

    else if(props.code === "03d" || props.code === "03n"){
        return(<img src={partlycloudy} alt='Partly Cloudy' width={props.width} height={props.height}/>)
    }

    else if(props.code === "04d" || props.code === "04n"){
        return(<img src={brokenclouds} alt='Mostly Cloudy' width={props.width} height={props.height}/>)
    }

    else if(props.code === "09d" || props.code === "09n"){
        return(<img src={altshowers} alt='Showers' width={props.width} height={props.height}/>)
    }

    else if(props.code === "10d"){
        return(<img src={altshowers} alt='Raining' width={props.width} height={props.height}/>)
    }

    else if(props.code === "10n"){
        return(<img src={altshowers} alt='Raining' width={props.width} height={props.height}/>)
    }

    else if(props.code === "11d" || props.code === "11n"){
        return(<img src={thunderstorm} alt='Storming' width={props.width} height={props.height}/>)
    }

    else if(props.code === "13d" || props.code === "13n"){
        return(<img src={snow} alt='Snowing' width={props.width} height={props.height}/>)
    }

    else if(props.code === "50d" || props.code === "50n"){
        return(<img src={foggy} alt='Fog' width={props.width} height={props.height}/>)
    }

    else if(props.code === "windy"){
        return(<img src={altwindy} alt="wind %" width={props.width} height={props.height}></img>)
    }

    else if(props.code === "precipitation"){
        return(<img src={precipitation} alt={"chanceofrain"} width={props.width} height={props.height}></img>)
    }

    else {
        return(<img src={day} alt='day' width={props.width} height={props.height}/>)
    }

}

export default Icon
