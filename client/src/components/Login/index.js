import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import "./login.css";
import Header from "../Header";
import Footer from "../Footer";
import Scroll from "./scroll.png";



class Login extends Component {

    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
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
        console.log('handleSubmit')
        console.log(this.state.email);
        axios
            .post('/api/login', {
                email: this.state.email,
                password: this.state.password
            })
            .then(response => {
                if (response.status === 200) 
                {
                    console.log(response.data);
                    sessionStorage.setItem("loggedIn","true");
                    sessionStorage.setItem("loggedAs",response.data.email);
                    
                    console.log(response.data.is_Store);
                    console.log("Logged in");
                    console.log("Logged in as: " + sessionStorage.getItem("loggedAs"));
                 
                    
                    // update the state to redirect to home
                    this.setState({
                        redirectTo: '/home'
                    })
                }
                
            }).catch(error => {
                console.log('login error: ')
                console.log(error);
                
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
                    <div className="background">
                    <div className="container">
                    <div className="row">
                        <img className="loginScroll col-md-9" src={Scroll} alt="scroll" />
                        <div className="form">
                       <form className="col-md-12">
                        <div className="form-group">
                            <label htmlFor="email"><i className="fas fa-dice-d20"></i>  Email Address</label>
                            <input type="email" className="form-control email input" placeholder="What is your email?" name="email" value={this.state.email} onChange={this.handleChange}></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password"><i className="fa fa-lock"></i>  Password</label>
                            <input type="password" className="form-control password input" placeholder="What's the password?"  name="password" value={this.state.password} onChange={this.handleChange}></input>
                        </div>
                        <a className="register" href="/register">Not a member? Click here!</a><br />
                        <button type="submit" className="btn loginSubmit" onClick={this.handleSubmit}>Submit</button>
                    </form>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <Footer />
            </div>
        );
    }
       }
    }

export default Login;