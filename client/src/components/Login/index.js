import React, { Component } from "react";
import "./login.css";

class Login extends Component {
    render() {
        return (
            <div>
                <form>
                <div className="form-group">
                        <label for="email">Email Address</label>
                        <input type="email" className="form-control email" placeholder="What is your email?"></input>
                    </div>
                    <div className="form-group">
                        <label for="password">Password</label>
                        <input type="password" className="form-control password" placeholder="What's the password?"></input>
                    </div>
                    <a href="/register">Not a member? Click here!</a><br/>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default Login;