import React from 'react';
import "./css/subheader.css"
const Subheader = ({ setdeliveryfilters, setdinoutfilters, setnightlifefilters }) => {

    function handledelivery() {
        setdeliveryfilters(true);
        setdinoutfilters(false)
        setnightlifefilters(false)
    }
    function handledinout() {
        setdinoutfilters(true)
        setdeliveryfilters(false)
        setnightlifefilters(false)
    }
    function handleNightLife() {
        setnightlifefilters(true)
        setdinoutfilters(false)
        setdeliveryfilters(false)
    }
    return (
        <div className='subheader'>
            <div className='option'>
                <div onClick={handledelivery}>Delivery</div>
                <div onClick={handledinout}>Dineout</div>
                <div onClick={handleNightLife}>Nightlife</div>
            </div>
        </div>
    );
}

export default Subheader;
