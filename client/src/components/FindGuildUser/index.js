import React, { Component } from "react";
import axios from 'axios';
import "./findGuildUser.css";
import topScroll from "./scrollTop.png";
import midScroll from "./scrollMid.png";
import midScrollJr from "./scrollMidJr.png";
import bottomScroll from "./scrollBottom.png";
import Header from "../Header";
import Footer from "../Footer";

class FindGuildUser extends Component {

    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            username: '',
            confirmPassword: '',

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
                        redirectTo: '/login'
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
        return (
            <div className="bigContainer">
                <Header />
                <div className="wrapper">
                    <img className="topScrollGuildUser" src={topScroll} />
                    <img className="midScrollGuildUser" src={midScroll} />
                    <img className="midScrollGuildUserJr" src={midScrollJr} />
                    <img className="bottomScrollGuildUser" src={bottomScroll} />
                    <div className="registerBackground">
                        <div className="findGuildFormUser">
                            <h1 className="findGuildTitle">Find a Guild</h1>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="input">Location (Zip Code)</label>
                                    <input type="email" className="form-control email input" placeholder="Zip" name="email" value={this.state.email} onChange={this.handleChange}></input>
                                </div>
                                <div className="form-group">
                                <p className="games">What games do you play?</p>
                                <label className="container">D&amp;D
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                                <label className="container">Pathfinder
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                                <label className="container">Pokemon
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                                <label className="container">Magic the Gathering
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                                <label className="container">Yu-Gi-Oh
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                                <label className="container">Board Games
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                                <label className="container">Minis
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                                </div>
                                <div className="form-group">
                                    <p className="host">Are you willing to host games?</p>
                                    <label className="container">Yes
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                                <label className="container">No
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

export default FindGuildUser