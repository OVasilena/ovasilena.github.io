import React from 'react';
import Reference from './Reference';

const References = () => {
    return (
        <div className="">
            <Reference pos = "My last position" firma="Firma 1" year="2017-2019"/>
            <Reference pos = "My other position" firma="Firma 2" year="2015-2017"/>
            <Reference pos = "Enter other position" firma="Firma 3" year="2011-2015"/>
            <Reference pos = "My first position" firma="Firma 4" year="2009-2011"/>

        </div>
    )
}

export default References;