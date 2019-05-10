import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import "./login.css";
import Header from "../Header";
import Footer from "../Footer";
import Scroll from "./scroll.png";

class Login extends Component {
    render() {
        return (
            <div className="bigContainer">
                <div className="wrapper">
                    <Header />
                    <div className="background">
                        <img className="loginScroll" src={Scroll} alt="scroll" />
                        <div className="form">
                            <form>
                                <div className="form-group">
                                    <label for="email"><i class="fas fa-dice-d20"></i>  Email Address</label>
                                    <input type="email" className="form-control email input" placeholder="What is your email?"></input>
                                </div>
                                <div className="form-group">
                                    <label for="password"><i class="fa fa-lock"></i>  Password</label>
                                    <input type="password" className="form-control password input" placeholder="What's the password?"></input>
                                </div>
                                <a className="register" href="/register">Not a member? Click here!</a><br />
                                <button type="submit" class="btn loginSubmit">Submit</button>
                            </form>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Login;