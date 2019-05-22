import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import axios from "axios";


class Event extends Component {

    constructor() {
        super()
        this.state = {
            title: '',
            venue: '',
            game: '',
            date:'',
            time:'',
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
        axios.post('api/event/', {
            title: this.state.title,
            venue: this.state.venue,
            game: this.state.game,
            date:this.state.date,
            time:this.state.time,
        })
            .then(response => {
                console.log(response)
                if (!response.data.errmsg) {
                    console.log('Event Added')
                    this.setState({ 
                        redirectTo: '/results'
                    })
                }
            }).catch(error => {
                console.log('Error Adding Event')
                console.log(error)
            })
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
        return (
            <div>
                <div className="form-group">
                    <label htmlFor="input">Event Title</label>
                    <input type="text" className="form-control text input" placeholder="Event Title" name="title" value={this.state.title} onChange={this.handleChange}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="input">Event Venue</label>
                    <input type="text" className="form-control text input" placeholder="Event Venue" name="venue" value={this.state.venue} onChange={this.handleChange}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="input">Game being played</label>
                    <input type="text" className="form-control text input" placeholder="Game" name="game" value={this.state.game} onChange={this.handleChange}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="input">Date</label>
                    <input type="text" className="form-control text input" placeholder="Event Date" name="date" value={this.state.date} onChange={this.handleChange}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="input">Time of Event</label>
                    <input type="text" className="form-control text input" placeholder="Event Time" name="time" value={this.state.time} onChange={this.handleChange}></input>
                </div>
                <button type="submit" className="btn loginSubmit" onClick={this.handleSubmit} >Submit</button>
            </div>
        );
    }
}
}

export default Event;