import React from 'react'
import {Link} from 'react-router-dom'

function NewsHeader() {
    return (
        <header className="news-header-container">
            <div className="news-header-content">

                <div className="news-logo-container">
                    <Link to='/' className="news-logo">              
                        DAILY UPDATE 
                    </Link>
                </div>

            </div>
        </header>
    )
}

export default NewsHeader
