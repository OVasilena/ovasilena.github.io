import React from 'react';
import c from '../../styles/Reference.module.css';

const Reference = (props) => {
    return (
        <div className={c.item}>
            <i></i>
            <h5>{props.pos}</h5>
            <p>{props.firma}</p>
            <p>{props.year}</p>
        </div>
    )
}

export default Reference;