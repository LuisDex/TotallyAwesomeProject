import React from "react";
import "./footer.css";
import logo from "./../../logo.svg"

const Footer = () => (
    <footer className = "footer">
        <p className="copyright"><img src={logo} className="App-logo" alt="logo" />© 2019 Copyright Team Smashington</p>
    </footer>
);

export default Footer;