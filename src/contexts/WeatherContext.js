import React, {createContext, useState} from 'react'

const WeatherContext = createContext();
const WeatherProvider = props => {

    const [day, setDay] = useState();
    const [current, setCurrent] = useState({});
    const [forecasted, setForecasted] = useState({});
    const [city, setCity] = useState('');

    const cityHandler = (e) => {
        setCity(e.target.value);
    }

    const weatherHandler = async (evt) => {
        if( evt.key === "Enter"){
            try {  
                const weatherAPI = `${process.env.REACT_APP_WEATHER_URL}weather?q=${city}&units=imperial&APPID=${process.env.REACT_APP_WEATHER_KEY}`;
                const response = await fetch(weatherAPI);
                const result = await response.json();
                setCurrent(result);
                setDay(new Date().getDay());
                setCity('')
    
                console.log(result)
                forecastHandler(result.coord.lat, result.coord.lon);
    
            } catch (error) {
                console.log('Error:', error);
            }
        }   
    }

    const forecastHandler = async (lat, lon) => {
        const forecastAPI = `${process.env.REACT_APP_WEATHER_URL}onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,alerts&units=imperial&APPID=${process.env.REACT_APP_WEATHER_KEY}`;
        const fcresponse = await fetch(forecastAPI);
        const fcresult = await fcresponse.json();
        setForecasted(fcresult);
        console.log(fcresult);
    }

    return(
        <WeatherContext.Provider value={{
            setCity,
            cityHandler,
            weatherHandler,
            day, 
            current,
            forecasted,
            city
        }}>
            {props.children}
        </WeatherContext.Provider>
    )
}
export {WeatherContext, WeatherProvider}
