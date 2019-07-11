import React from 'react';
import MaterialIcon, {colorPalette} from 'material-icons-react';
import s from './../../styles/Contact.module.css';

const Contact = () => {
    return (
        <div className="mt-2">
            <h3 className="text-uppercase">Contact</h3>
            <ul className={s.nav}>
                <li>
                    <MaterialIcon icon="home" size="tiny"/>
                    <p>City, Country</p>
                </li>
                <li>
                    <MaterialIcon icon="email" size="tiny"/>
                    <p>E-Mail</p>
                </li>
                <li>
                    <MaterialIcon icon="airplay" size="tiny"/>
                    <p>Website</p>
                </li>
                <li>
                    <MaterialIcon icon="ring_volume" size="tiny"/>
                    <p>Telephone</p>
                </li>
            </ul>
        </div>
    )
};

export default Contact;