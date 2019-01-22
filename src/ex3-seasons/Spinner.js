import React from 'react';
import './Spinner.css';

const Spinner = (props) => {
    return (
        <div className="spinner">
            <div className="ui active dimmer">
                <div className="ui big text loader">{props.msg}</div>
            </div>
        </div>
    );
};

// Default
Spinner.defaultProps = {
    msg: 'Loading...'
}

export default Spinner;