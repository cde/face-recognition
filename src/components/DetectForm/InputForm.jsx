import React from 'react';
import './InputForm.css'

const DetectForm = ({onInputChange, onButtonSubmit}) => (
    <div>
        <p className='f3'> {'This Magic will detect faces in your pictures. Get it a try.'}</p>
        <div className='center'>
            <div className='form center pa4 b43 shadow-2'>
                <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange} />
                <button
                    className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
                    onClick = {onButtonSubmit}
                > Detect</button>
            </div>

        </div>

    </div>
);

export default DetectForm