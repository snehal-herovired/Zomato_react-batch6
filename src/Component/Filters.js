import React from 'react';
import deliveryfilterdata from "../mockdata/deliveryfilter"
import dineoutdata from "../mockdata/dineoutfilters"
import nightlifedata from "../mockdata/nightlifefilters"
import "./css/filter.css"
const Filters = ({ setdeliveryfilters, deliveryfilters, dineoutfilters, nightlifefilters, setdinoutfilters }) => {

    return (
        <div className='filter'>


            {
                deliveryfilters && deliveryfilterdata.map((ele) => (
                    <button className='btn-filter'
                        key={ele.id}>{ele.filter}</button>

                ))
            }

            {
                dineoutfilters && dineoutdata.map((ele) => (
                    <button className='btn-filter'
                        key={ele.id}>{ele.filter}</button>

                ))
            }
            {
                nightlifefilters && nightlifedata.map((ele) => (
                    <button className='btn-filter'
                        key={ele.id}>{ele.filter}</button>

                ))
            }
        </div>
    );
}

export default Filters;

