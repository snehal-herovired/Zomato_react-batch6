import React from 'react';
import "./css/header.css"
const Header = ({setOpenModal}) => {
    return (
        <>
            <div className='header'>
                <h3>Zomato</h3>
                <input type="text" placeholder='seacrh here' />
                <button onClick={()=>setOpenModal(true)}>Login</button>
            </div>
            
        </>
    );
}

export default Header;
