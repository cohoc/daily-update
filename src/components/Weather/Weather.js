import React, {useEffect, useContext} from 'react'
import Subheader from '../Subheader';
import Main from '../Main';
import { WeatherProvider } from '../../contexts/WeatherContext';
import { SearchContext } from '../../contexts/SearchContext'

function Weather({match}) {

    const {setQueue, setCity} = useContext(SearchContext);

    useEffect(() => {
        setQueue(false);
        setCity('')
    },[])


    const {
        params: {cityId}
    } = match;

    return (
        <WeatherProvider>
            <div>
                <Subheader/>
                <Main search={cityId}/>
            </div>
        </WeatherProvider>
        

    )
}

export default Weather
