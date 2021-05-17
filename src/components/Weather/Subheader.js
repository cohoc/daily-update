import React from 'react'

function Subheader() {
    return (
        <div className="subheader">
            <div className="subheader-content">
                <ul className="subheader-navlist">
                    <button id="current">
                        <span>CURRENT</span>
                    </button>

                    <button id="hourly">
                        <span>HOURLY</span>
                    </button>

                    <button id="forecast">
                        <span>DAILY</span>
                    </button>
                </ul>
            </div> 
        </div>
    )
}

export default Subheader
