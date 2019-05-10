import React, { Component } from "react";
import "./findGuild.css";
import Header from "../Header";
import Footer from "../Footer";

class FindGuild extends Component {
    render() {
        return (
            <div className="bigContainer">
                <div className="wrapper">
                <Header />
                    Find a Guild
                <Footer />
                </div>
            </div>
        );
    }
}

export default FindGuild