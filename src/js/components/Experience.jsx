import React from 'react';

const Experience = (props) => {
    return (
        <div>
            <h5 className="text-uppercase">Enter job position here</h5>
            <span>
                <i>{props.company}</i>
            </span>
            <p>{props.desc}</p>
        </div>
    )
}

export default Experience;