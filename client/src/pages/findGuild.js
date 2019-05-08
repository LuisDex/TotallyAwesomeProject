import React, { Component } from "react";
import FindGuild from "./../components/FindGuild";
import Header from "../components/Header";
import Footer from "../components/Footer";

class FindGuildPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <FindGuild />
                <Footer />
            </div>
        );
    }
}

export default FindGuildPage;