import React, {useState} from 'react'
import hamburger from '../svg/hamburger.svg'
import Sidemenu from './Sidemenu';

function Hamburger() {

    const [open, setOpen] = useState(false);

    return (
        <>
            <button 
                onClick={() => setOpen(!open)} 
                className="hamburger-container">

                <img id="hamburger" src={hamburger} alt="hamburger"/>
            </button>
            <Sidemenu open={open} setOpen={setOpen} />
        </>
    )
}

export default Hamburger
