import React from 'react';
import { IconContext } from 'react-icons';
import { FaReact } from 'react-icons/fa'
import { MdAlarm } from 'react-icons/md'

export const IconsTest = () => {

    return (
        <div>

            <h1>Icons Demo</h1>
            <IconContext.Provider value={{ color: 'green', size: '5rem' }}>
                <div className="App">
                    <FaReact />
                    <MdAlarm />
                    <FaReact color='purple' size='10rem' />
                    <MdAlarm color='purple' size='10rem' />
                </div>
            </IconContext.Provider>
        </div>
    );
}

