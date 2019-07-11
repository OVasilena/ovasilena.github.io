import React, { Component } from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import "../../styles/Base.module.css"

class MainPage extends Component {
    render() {
        return (
            <main className="content-main col-lg-12 col-md-12 col-sm-12 p-0 app-wrapper">
                <Header/>
                <Content/>
                <Footer/>
            </main>
        )
    }
}

export default MainPage