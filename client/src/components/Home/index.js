import React, { Component } from "react";
import "./home.css";
import Wumbo from "./wumbotron.jpg";
import Header from "../Header";
import Footer from "../Footer";

class Home extends Component {
    render() {
        return (
            <div className="bigContainer">
            <div className="wrapper">
                <Header />
                <img className="wumbotron" src={Wumbo} />
                <h1 className="wumboTitle">HAIL AND WELL MET, TRAVELER!</h1>
                <Footer />
                </div>
            </div>
        );
    }
}

export default Home;