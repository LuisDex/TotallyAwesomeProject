import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import "./findGuildUser.css";
import topScroll from "./scrollTop.png";
import midScroll from "./scrollMid.png";
import midScrollJr from "./scrollMidJr.png";
import bottomScroll from "./scrollBottom.png";
import Header from "../Header";
import Footer from "../Footer";
import $ from "jquery";

class FindGuildUser extends Component {

    constructor() {
        super()
        this.state = {
            location: '',
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
        if($("#hosting").is(":checked"))
        {
          var hosting = true;
        } else if($("#notHosting").is(":checked"))
        {
          var hosting = false;
        }

        $.each($("input[name='game']:checked"), function(){            
            games.push($(this).val());
        });
        console.log(games);

        axios.put('api/user/' + sessionStorage.getItem("loggedAs"), {
          games:games,
          host:hosting,
          location:this.state.location
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
                                    <input type="text" className="form-control zip input" placeholder="Zip" name="location" value={this.state.location} onChange={this.handleChange}></input>
                                </div>
                                <div className="form-group">
                                <p className="games">What games do you play?</p>
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
                                <div className="form-group">
                                    <p className="host">Are you willing to host games?</p>

                                    <div className="custom-control custom-radio">
                                        <input type="radio" id="hosting" name="customRadio" className="custom-control-input"/>
                                        <label className="custom-control-label" htmlFor="hosting">Yes</label>
                                    </div>
                                    <div className="custom-control custom-radio">
                                        <input type="radio" id="notHosting" name="customRadio" className="custom-control-input"/>
                                        <label className="custom-control-label" htmlFor="notHosting">No</label>
                                    </div>
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

export default FindGuildUser