import React, { Component } from "react";
import "./signup.css";

class SignUp extends Component {
    render() {
        return (
            <div className="background">
                {/* <img className="loginScroll" src={Scroll} alt="scroll" /> */}
                <div className="form">
                    <form>
                        <div className="form-group">
                            <label for="email">Email Address</label>
                            <input type="email" className="form-control email input" placeholder="What is your email?"></input>
                        </div>
                        <div className="form-group">
                            <label for="password">Password</label>
                            <input type="password" className="form-control password input" placeholder="What's the password?"></input>
                        </div>
                        <div className="form-group">
                            <label for="password">Username</label>
                            <input type="password" className="form-control password input" placeholder="And be clever"></input>
                        </div>
                        <button type="submit" class="btn loginSubmit">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default SignUp