import React from 'react';
import Tilt from 'react-tilt'
// import brain from './brain.png'
import face from './icons8-face-id-50.png'
import './Logo.css'

const Logo = () => (
    <div className='link white-70 hover-white no-underline flex items-center pa3 w-30'>
        <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 100, width: 100 }} >
            <div className="Tilt-inner pa3 "> <img style={{paddingTop: '5px'}} alt='logo' src={face} /> </div>
        </Tilt>
    </div>
);

export default Logo;