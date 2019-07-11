import React from 'react';
import s from './../../styles/Pictur.module.css';
import pictur from '../../images/profileFoto.png'

const Pictur = () => {
    return (
        <div className={s.panel_pictur}>
            <img src={pictur} className={s.img}/>
        </div>
    )
}

export default Pictur;