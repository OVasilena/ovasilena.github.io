import React from 'react';
import SideBar from "./SideBar";
import Profile from "./Profile";
import c from './../../styles/Content.module.css';

const Content = () => {
    return <div className={c.content}>
        <div className={`${c.landing_page} row`}>
            <SideBar/>
            <Profile/>
        </div>

    </div>
};

export default Content;