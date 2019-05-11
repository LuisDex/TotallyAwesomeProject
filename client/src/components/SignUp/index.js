import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import "./signup.css";
import Header from "../Header";
import Footer from "../Footer";
import topScroll from "./scrollTop.png";
import midScroll from "./scrollMid.png";
import bottomScroll from "./scrollBottom.png";
// import Table from "./table.jpg";

class SignUp extends Component {

    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            username: '',
            confirmPassword: '',
            redirectTo: null

        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()

        //request to server to add a new username/password
        axios.post('/api/user', {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        })
            .then(response => {
                console.log(response)
                if (!response.data.errmsg) {
                    console.log('successful signup')
                    this.setState({ //redirect to login page
                        redirectTo: '/findGuildUser'
                    })
                } else {
                    console.log('username already taken')
                }
            }).catch(error => {
                console.log('signup error: ')
                console.log(error)

            })
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
        return (
            <div className="bigContainer">
                <Header />
                <div className="wrapper">
                    <div className="registerBackground">
                        <img className="topScroll" src={topScroll} />
                        <img className="midScroll" src={midScroll} />
                        <img className="bottomScroll" src={bottomScroll} />
                        <div className="registerForm">
                            <h1 className="registerTitle">Register for a Guild</h1>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input type="email" className="form-control email input" placeholder="What is your email?" name="email" value={this.state.email} onChange={this.handleChange}></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" className="form-control password input" placeholder="What's the password?" name="password" value={this.state.password} onChange={this.handleChange}></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="username">Username</label>
                                    <input type="text" className="form-control username input" placeholder="And be clever" name="username" value={this.state.username} onChange={this.handleChange}></input>
                                </div>
                                <div className="form-group">
                                    <label className="container">I am a User
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="container">I am a Store
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                                <button type="submit" className="btn loginSubmit" onClick={this.handleSubmit} >Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
    }
}

export default SignUp