import React, { Component } from "react";
import "./main.css";
import Map from "./world_map.png";
import Capital from "./capital.png";
import Castle from "./castle.png";
import Tower from "./tower.png";
import Guild from "./guild.png";

class Main extends Component {
    render() {
        return (
            <div>
                <img className="map" src={Map} />
                <a href="/profile"><img className="capital" src={Capital} /></a>
                <div className="profile">Profile</div>
                <a href="/login"><img className="castle" src={Castle} /></a>
                <dic className="login">Login</dic>
                <a href="/home"><img className="tower" src={Tower} /></a>
                <div className="home">Home</div>
                <a href="/findGuildUser"><img className="guild" src={Guild} /></a>
                <div className="findGuild">Find a Guild</div>
                <div className="title">Welcome to AirD&amp;D</div>
            </div>
        );
    }
}

export default Main;