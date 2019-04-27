import React, { Component } from "react";
import "./signup.css";

class SignUp extends Component {
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
                    <div className="form-group">
                        <label for="username">Username</label>
                        <input type="text" className="form-control username" placeholder="And be a little creative..."></input>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default SignUp