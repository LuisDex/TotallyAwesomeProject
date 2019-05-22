import React, { Component } from "react";
import "./home.css";
import Header from "../Header";
import Footer from "../Footer";

class Home extends Component {
    render() {
        return (
            <div className="bigContainer">
                <Header />
                <div className="wrapper">
                    <div className="wumbotron">
                        <div className="wumboHeader">
                            <h1 className="wumboTitle">HAIL AND WELL MET, TRAVELER</h1>
                            <h3 className="wumboText">Come in and find your new guild!</h3>
                            <a href="/findGuildUser"><button className="btn wumboButton" >Enter</button></a>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Home;