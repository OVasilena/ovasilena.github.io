import React from 'react';
import s from './../../styles/Pictur.module.css';
import pictur from './../../images/Bildschirmfoto 2019-03-06 um 19.53.01.png'

const Pictur = () => {
    return (
        <div className={s.panel_pictur}>
            <img src={pictur} className={s.img}/>
        </div>
    )
}

export default Pictur;