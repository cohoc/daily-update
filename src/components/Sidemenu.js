import React from 'react'
import '../css/Sidemenu.css'
import close from '../svg/close.svg'

function Sidemenu(props) {
    return (
        <div className={props.open ? 'sidemenu-container toggle' : 'sidemenu-container'}>
            <ul className="sidemenu-links">

                <div className="sidemenu-close-container">
                    <button onClick={() => props.setOpen(!props.open) } className="sidemenu-close">
                        <img id="close-icon" src={close} alt="close"/>
                    </button>
                </div>

                <li className="side-link-container">
                    <a id="side-link" href="/covid">
                        COVID
                    </a>
                </li>

                <li className="side-link-container">
                    <a id="side-link" href="/weather">
                        WEATHER
                    </a>
                </li>

                <li className="side-link-container">
                    <a id="side-link" href="/news">
                        NEWS
                    </a>
                </li>

            </ul>
        </div>
    )
}

export default Sidemenu
