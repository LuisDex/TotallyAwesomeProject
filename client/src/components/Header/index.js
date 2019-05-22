import React, { Component } from "react";
import "./header.css";
import Logo from "./d20.png";

class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="/home">
                        <img className="logo" src={Logo} />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link link" href="/profile">Profile</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link link" href="/findGuild">Find a Guild</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link link" href="/login">Login</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;