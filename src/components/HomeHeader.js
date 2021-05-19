import React from 'react'
import {Link} from 'react-router-dom'
import Hamburger from './Hamburger'

function HomeHeader() {
    return (
        <div className="main-header">
            <div className="header-content">
                <div className="home-logo-container">
                    <Link to='/' className="home-logo">              
                        Daily Update
                    </Link>
                </div>
 
                <ul className="header-links">
                    <li className="link-container">
                        <Link to='/covid' id="link">
                            COVID
                        </Link>
                    </li>
                    
                    <li className="link-container">
                        <Link to='/weather' id="link">
                            WEATHER
                        </Link>
                    </li>

                    <li className="link-container">
                        <Link to='/news' id="link">
                            NEWS
                        </Link>
                    </li>
                </ul>

                <Hamburger/>

            </div>
            
        </div>
    )
}

export default HomeHeader
