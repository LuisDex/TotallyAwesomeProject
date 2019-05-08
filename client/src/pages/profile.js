import React, { Component } from "react";
import Profile from "./../components/Profile";
import Header from "../components/Header";
import Footer from "../components/Footer";

class ProfilePage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Profile />
                <Footer />
            </div>
        );
    }
}

export default ProfilePage;