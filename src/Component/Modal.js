import React from 'react';
import "./css/modal.css"
const Modal = ({ setOpenModal }) => {
    function handleclick() {
        setOpenModal(false)
    }
    return (
        <div className='modal'>
            <div className='login'>
                <div className='cross' onClick={handleclick}>x</div>
                <input type="text" placeholder='Email' />
                <input type="text" placeholder='Password' />
                <input type="submit" />
            </div>
        </div>
    );
}

export default Modal;
