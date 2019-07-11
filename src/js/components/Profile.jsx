import React from 'react';
import Education from "./Education";
import Experiences from "./Experiences";
import References from './References';
import s from './../../styles/Base.module.css'

const Profile = () => {
    return <div className="profile col-lg-8 col-md-12 col-sm-12 p-0">
        <div className={s.panel}>
            <div className={s.panel_body}>
                <Education/>
                <Experiences/>
                <References/>
            </div>
        </div>
    </div>
};

export default Profile;