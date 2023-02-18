import React from 'react';
import deliveryfilterdata from "../mockdata/deliveryfilter"
import dineoutdata from "../mockdata/dineoutfilters"
import "./css/filter.css"
const Filters = ({setdeliveryfilters,deliveryfilters,dineoutfilters,setdinoutfilters}) => {
    
    console.log(deliveryfilterdata);
    return (
        <div className='filter'>
        
            
            {
                deliveryfilters &&    deliveryfilterdata.map((ele) => (
                    <button className='btn-filter'
                    key={ele.id}>{ele.filter}</button> 
                    
                ) )
            }

            {
                  dineoutfilters &&    dineoutdata.map((ele) => (
                    <button className='btn-filter'
                    key={ele.id}>{ele.filter}</button> 
                    
                ) )
            }
        </div>
    );
}

export default Filters;

