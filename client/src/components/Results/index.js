import React, { Component } from "react";
import axios from "axios";
import "./results.css";
import $ from "jquery";

class ResultsPage extends Component {
    componentDidMount() 
    {
    this.getEventInfo();
    }
    
    getEventInfo()
    {
    axios.get("/api/event")
  .then(function (response) {
    // handle success
    console.log(response)
    let eventArray = response.data;
    
    for(let i=0;i<eventArray.length;i++)
    {
    var newCard = $("<div>").addClass("card");
    var cardBody = $("<div>").addClass("card-body"); 
    var cardTitle = $("<h5>").addClass("card-title").text(eventArray[i].title);
    var cardAddress = $("<p>").text("Venue: " + eventArray[i].venue);
    var time = $("<p>").text("Event Time: " + eventArray[i].time );
    var date = $("<p>").text("Event Date: " + eventArray[i].date );
    var game = $("<p>").text("Game/Format: " + eventArray[i].game);
    $(cardBody).append(cardTitle).append(cardAddress).append(date).append(time).append(game);
    $(newCard).append(cardBody);
    $("#eventSpace").append(newCard);
   }
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    console.log("Done");
  });
    }

    render() {
        return (
            <div>
               <div className="container card-deck" id="eventSpace">

               </div>
            </div>
        );
    }
}

export default ResultsPage;