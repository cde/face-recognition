import React from 'react';
import Logo from "../Logo/Logo";

const Navigation = () => (
    <nav className='flex justify-end'>
        <Logo />
        <div className='f5 link dim black underline pa3 pointer w-70 tr'>Sign out</div>
    </nav>
);

export default Navigation