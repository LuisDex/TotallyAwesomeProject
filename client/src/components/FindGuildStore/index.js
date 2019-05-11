import React, { Component } from "react";
import axios from 'axios';
import "./findGuildStore.css";
import topScroll from "./scrollTop.png";
import midScroll from "./scrollMid.png";
import midScrollJr from "./scrollMidJr.png";
import bottomScroll from "./scrollBottom.png";
import Header from "../Header";
import Footer from "../Footer";

class FindGuildStore extends Component {

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
                    <img className="topScrollGuildStore" src={topScroll} />
                    <img className="midScrollGuildStore" src={midScroll} />
                    <img className="midScrollGuildStoreJr" src={midScrollJr} />
                    <img className="bottomScrollGuildStore" src={bottomScroll} />
                    <div className="registerBackground">
                        <div className="findGuildFormStore">
                            <h1 className="findGuildTitle">Find a Guild</h1>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="input">Location (Store Address)</label>
                                    <input type="email" className="form-control email input" placeholder="Address" name="email" value={this.state.email} onChange={this.handleChange}></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="input">Hours of Operation</label>
                                    <input type="email" className="form-control email input" placeholder="Hours" name="email" value={this.state.email} onChange={this.handleChange}></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="input">Website</label>
                                    <input type="email" className="form-control email input" placeholder="Website" name="email" value={this.state.email} onChange={this.handleChange}></input>
                                </div>
                                <div className="form-group">
                                <p className="games">What games do you host?</p>
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

export default FindGuildStore