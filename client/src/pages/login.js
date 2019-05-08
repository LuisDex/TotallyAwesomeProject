import React, { Component } from "react";
import Login from "./../components/Login";
import Header from "../components/Header";
import Footer from "../components/Footer";

class LoginPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Login />
                <Footer />
            </div>
        );
    }
}

export default LoginPage;