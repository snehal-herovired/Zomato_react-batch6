import React from 'react';
import "./css/header.css"
const Header = ({ setOpenModal }) => {
    return (
        <>
            <div className='header'>
                <div className='logo'></div>
                <input type="text" placeholder='Search for Restraunt, Cuisine or a Dish' />
                <button onClick={() => setOpenModal(true)}>Login</button>
                <button onClick={() => setOpenModal(true)}>Signup</button>
            </div>

        </>
    );
}

export default Header;
