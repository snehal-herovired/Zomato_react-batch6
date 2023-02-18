import React from 'react';
import "./css/subheader.css"
const Subheader = ({ setdeliveryfilters, setdinoutfilters }) => {
    
    function handledelivery() {
        setdeliveryfilters(true);
        setdinoutfilters(false)
    }
    function handledinout() {
        setdinoutfilters(true)
        setdeliveryfilters(false)
    }
    return (
        <div className='subheader'>
            <div className='option'>
                <div onClick={handledelivery}>Delivery</div>
                <div onClick={handledinout}>Dineout</div>
                <div>Nightlife</div>
            </div>
        </div>
    );
}

export default Subheader;
