import React, { Component } from "react";
import "./login.css";
import Scroll from "./scroll.png";

class Login extends Component {
    render() {
        return (
            <div>
                <img className="loginScroll" src={Scroll} alt="scroll" />
                <div className="form">
                    <form>
                        <div className="form-group">
                            <label for="email">Email Address</label>
                            <input type="email" className="form-control email" placeholder="What is your email?"></input>
                        </div>
                        <div className="form-group">
                            <label for="password">Password</label>
                            <input type="password" className="form-control password" placeholder="What's the password?"></input>
                        </div>
                        <a href="/register">Not a member? Click here!</a><br />
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;