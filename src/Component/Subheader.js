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
                <div onClick={handledelivery}><i class="fa fa-truck"></i> Delivery</div>
                <div onClick={handledinout}><i class="fa fa-cutlery"></i> Dineout</div>
                <div onClick={handleNightLife}><i class="fa fa-beer"></i> Nightlife</div>
            </div>
        </div>
    );
}

export default Subheader;
