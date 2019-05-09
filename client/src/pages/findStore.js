import React, { Component } from "react";
import FindStore from "./../components/FindStore";
import Header from "../components/Header";
import Footer from "../components/Footer";

class FindStorePage extends Component {
    render() {
        return (
            <div>
                <Header />
                <FindStore />
                <Footer />
            </div>
        );
    }
}

export default FindStorePage;