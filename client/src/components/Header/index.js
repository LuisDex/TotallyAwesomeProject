import React, { Component } from "react";
import "./header.css";

class Header extends Component {
    render() {
        return (
            <nav>
                <div>
                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 1</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Find a Guild</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/profile">Profile</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/login">Sign In/Sign Up</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;