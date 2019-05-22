import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import "./findGuildStore.css";
import topScroll from "./scrollTop.png";
import midScroll from "./scrollMid.png";
import midScrollJr from "./scrollMidJr.png";
import bottomScroll from "./scrollBottom.png";
import Header from "../Header";
import Footer from "../Footer";
import $ from "jquery";

class FindGuildStore extends Component {

    constructor() {
        super()
        this.state = {
            location: '',
            hours: '',
            site: '',
            redirectTo:null

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

        var games = [];
        $.each($("input[name='game']:checked"), function(){            
            games.push($(this).val());
        });
        console.log(games);
        //request to server to add a new username/password
        axios.put('api/store/' + sessionStorage.getItem("loggedAs"), {
              games:games,
              location:this.state.location,
              hours:this.state.hours,
              site:this.state.site
        })
            .then(response => {
                console.log(response)
                if (!response.data.errmsg) {
                    console.log('Update Successful')
                    this.setState({ //redirect to login page
                        redirectTo: '/profile'
                    })
                }
            }).catch(error => {
                console.log('Error Updating')
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
                                    <input type="text" className="form-control text input" placeholder="Address" name="location" value={this.state.location} onChange={this.handleChange}></input>
                                </div>
                                <div className="form-row">
                                    <label htmlFor="input">Hours of Operation</label>
                                    <input type="text" className="form-control text input" placeholder="Hours" name="hours" value={this.state.hours} onChange={this.handleChange}></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="input">Website</label>
                                    <input type="text" className="form-control text input" placeholder="Website" name="site" value={this.state.site} onChange={this.handleChange}></input>
                                </div>
                                <div className="form-group">
                                <p className="games">What games do you host?</p>
                                <label className="container">D&amp;D
                                    <input type="checkbox" value = "DnD" name = "game"/>
                                    <span className="checkmark"></span>
                                </label>
                                <label className="container">Pathfinder
                                    <input type="checkbox" value = "Pathfinder" name = "game"/>
                                    <span className="checkmark"></span>
                                </label>
                                <label className="container">Pokemon CCG
                                    <input type="checkbox" value = "Pokemon CCG" name = "game"/>
                                    <span className="checkmark"></span>
                                </label>
                                <label className="container">Magic the Gathering
                                    <input type="checkbox" value = "Magic the Gathering" name = "game"/>
                                    <span className="checkmark"></span>
                                </label>
                                <label className="container">Yu-Gi-Oh
                                    <input type="checkbox" value = "Yu-Gi-Oh" name = "game"/>
                                    <span className="checkmark"></span>
                                </label>
                                <label className="container">Board Games
                                    <input type="checkbox" value = "Board Games" name = "game"/>
                                    <span className="checkmark"></span>
                                </label>
                                <label className="container">Minis
                                    <input type="checkbox" value = "Miniature Games" name = "game" />
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

export default FindGuildStore