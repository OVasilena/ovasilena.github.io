import React from 'react';
import Contact from './Contact';
import About from './About';
import Pictur from './Pictur';
import styleClass from "../../styles/Base.module.css"

/*let styleClass = {
    'nav': 'sidebar_nav_3ou54',
    'item': 'sidebar_item_13rt3'
}*/


// className={`${styleClass.item} ${styleClass.active}`}

const SideBar = () => {
    return (
        <div className="col-lg-3 col-md-12 col-sm-12 h-100">
            <div className={styleClass.panel}>
                <div className={styleClass.panel_body}>
                    <Pictur/>
                    <Contact/>
                    <About/>
                </div>
            </div>
        </div>
    )
};

export default SideBar;