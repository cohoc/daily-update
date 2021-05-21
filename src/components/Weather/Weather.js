import React from 'react'
import Header from './WeatherHeader';
import Main from './Main';
import { WeatherProvider } from '../../contexts/WeatherContext';

function Weather() {

    return (
        <WeatherProvider>
            <div>
                <Header />
                <Main />
            </div>
        </WeatherProvider>

    )
}

export default Weather
