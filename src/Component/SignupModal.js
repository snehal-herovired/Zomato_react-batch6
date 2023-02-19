import React from 'react';
import "./css/modal.css"
const SignupModal = ({ setOpenSignupModal }) => {
    function handleSignupclick() {
        setOpenSignupModal(false)
    }
    return (
        <div className='modal'>
            <div className='login-signup'>
                <div className='cross' onClick={handleSignupclick}>x</div>
                <input type="text" placeholder='Full Name' />
                <input type="text" placeholder='Email' />
                <input type="text" placeholder='Password' />
                <input type="submit" />
            </div>
        </div>
    );
}

export default SignupModal;
