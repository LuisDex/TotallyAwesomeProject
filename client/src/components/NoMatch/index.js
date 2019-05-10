import React, { Component } from "react";
import "./nomatch.css";
import Header from "../Header";
import Footer from "../Footer";
import Orc from "./orc.png";
import Tavern from "./tavern.png";

class NoMatch extends Component {
    render() {
        return (
            <div className="bigContainer">
                <div classNAme="wrapper">
                    <Header />
                    <img className="tavern" src={Tavern} />
                    <img className="orc" src={Orc} />
                    <p className="fourOhFour">You've made a wrong turn...</p>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default NoMatch;