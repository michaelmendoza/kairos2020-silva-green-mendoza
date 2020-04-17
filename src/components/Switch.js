import React from 'react';

function Switch({props}) {
    return(
        <label className="switch">
            <input type="checkbox" onChange={props.handleChange}/>
            <span className="slider round"></span>
        </label>
    );
}

export default Switch;