import React, { Component } from "react";
import Results from "./../components/Results";
import Header from "../components/Header";
import Footer from "../components/Footer";

class ResultsPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Results />
                <Footer />
            </div>
        );
    }
}

export default ResultsPage;