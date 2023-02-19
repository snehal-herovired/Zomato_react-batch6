import React from 'react';
import "./css/header.css"
const Header = ({ setOpenModal, setOpenSingupModal }) => {
    return (
        <>
            <div className='header'>
                <div className='logo'></div>
                <div className='searchbar-container'><i className="fa fa-search" aria-hidden="true"></i><input type="text" placeholder='Search for Restraunt, Cuisine or a Dish' /></div>
                <button onClick={() => setOpenModal(true)}>Login</button>
                <button onClick={() => setOpenSingupModal(true)}>Signup</button>
            </div>

        </>
    );
}

export default Header;
