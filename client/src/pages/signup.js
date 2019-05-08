import React, { Component } from "react";
import SignUp from "./../components/SignUp";
import Header from "../components/Header";
import Footer from "../components/Footer";

class Register extends Component {
    render() {
        return (
            <div>
                <Header />
                <SignUp />
                <Footer />
            </div>
        );
    }
}

export default Register;