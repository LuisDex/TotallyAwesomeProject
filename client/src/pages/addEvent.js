import React, { Component } from "react";
import Event from "./../components/Event";
import Header from "../components/Header";
import Footer from "../components/Footer";

class AddEventPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Event />
                <Footer />
            </div>
        );
    }
}

export default AddEventPage;