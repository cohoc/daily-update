import React from 'react'
import {Link} from 'react-router-dom'


function CovidHeader() {
    return (
        <header className="covid-header-container">
            <div className="covid-header-content">

                <div className="covid-logo-container">
                    <Link to='/' className="covid-logo">              
                        DAILY UPDATE 
                    </Link>
                </div>

            </div>
        </header>
    )
}

export default CovidHeader
