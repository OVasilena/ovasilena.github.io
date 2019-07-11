import React from 'react';
import c from './../../styles/Header.module.css';

const Header = () => {
    return (
        <header className="header w-100">
            <div className={c.header}>

                    <div className={c.panel_border}>
                        <hr className={c.divider}/>
                            <h1>My Name</h1>
                            <span>Title</span>


                    </div>


            </div>
        </header>
    )
};

export default Header;