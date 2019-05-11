import React, { Component } from "react";
import "./home.css";
import Wumbo from "./wumbotron.jpg";
import Header from "../Header";
import Footer from "../Footer";

class Home extends Component {
    render() {
        return (
            <div className="bigContainer">
                <Header />
                <div className="wrapper">
                    <img className="wumbotron" src={Wumbo} />
                    <h1 className="wumboTitle">HAIL AND WELL MET, TRAVELER!</h1>
                    <p className="wumboText">Come on in and find your new guild!</p>
                    <a href="/findGuild"><button className="btn wumboButton">Find Guild</button></a>
                    <div className="content">
                        
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Home;