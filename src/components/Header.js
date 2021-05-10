import React, {useContext} from 'react'
import {SearchContext} from '../contexts/SearchContext'
import {Link, Redirect} from 'react-router-dom'


function Header() {
    const {city, search, cityHandler, searchHandler, queue } = useContext(SearchContext);

    

    return (
        <header className="main-header">
            <div className="header-content">
                <Link to='/' className="logo">              
                    DAILY UPDATE 
                </Link>

                <div className="headersearch-container">
                    <input 
                        type="text" 
                        className="header-search"
                        placeholder="Search City"
                        value={city}
                        onChange={(e) => cityHandler(e)}
                        onKeyPress={searchHandler}
                        > 
                    </input>

                    <Link to={{
                        pathname: `/weather/${search}`,
                        state: {search}
                        }}>
                        <button className="search-btn">
                            <svg id="search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M505.7 475.6l-145.6-145.6c28.2-34.8 45.2-79.1 45.2-127.3 0-111.7-90.9-202.7-202.7-202.7S0 90.9 0 202.7s90.9 202.7 202.7 202.7c48.2 0 92.5-17 127.3-45.2l145.6 145.6c4.2 4.2 9.6 6.3 15.1 6.3s10.9-2.1 15.1-6.3C514.1 497.4 514.1 483.9 505.7 475.6zM202.7 362.7c-88.2 0-160-71.8-160-160s71.8-160 160-160 160 71.8 160 160S290.9 362.7 202.7 362.7z"/>
                            </svg>
                        </button>
                    </Link>

                    
                    { queue ? <Redirect 
                        to={{
                        pathname: `/weather/${search}`,
                        state: {search}
                        }} /> 
                        
                    : '' }
                    
                    
                </div>
                
            </div>
        </header>
    )
}

export default Header
