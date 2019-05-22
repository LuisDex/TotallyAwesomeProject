import React, { Component } from "react";
import "./profile.css";
import axios from "axios";
import $ from "jquery";

class Profile extends Component {

     componentDidMount() 
    {
    //   populateUser(this.getUserInfo());
    this.getUserInfo();
    
    // this.populateUser(userArray);
    }

    getUserInfo()
    {
      let url = "";
      if(sessionStorage.getItem("is_Store") === "false")
      {
        url = "api/user?email=";
      }else{
        url = "api/store?email=";
      }
    axios.get(url + sessionStorage.getItem("loggedAs"))
  .then(function (response) {
    // handle success
    let userArray = response.data[0];
    console.log(sessionStorage.getItem("is_Store"));
    $("#username").text("Username: " +  userArray.username);
    $("#location").text("Location: " + userArray.location);

  if(sessionStorage.getItem("is_Store") === "yes")
  {
    $("#hours").text("Hours of Operation: " +  userArray.hours);
    $("#website").text("Website: " +  userArray.site);
  }

  if(sessionStorage.getItem("is_Store")==="false"){
    if(userArray.host)
    { $("#hosting").text("Willing to host"); 
    }else {
       $("#hosting").text("Not able to host"); 
    }
  }
    for(var i=0;i<userArray.games.length;i++)
    {
      var game = $("<li></li>").text(userArray.games[i]);
      $("#gameslist").append(game);
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
            // <div>
                
            // </div>
            <div className="container">
        <div className="row">
            <div className="col-sm-6 offset-sm-3">
                <div className="user-card text-center">
                    <div className="user-header"> </div>
                    <div className="profile-pic">
                        <img id="pic" src="" alt=""></img>
                    </div>
                    <div className="user-data">
                        <div className="user-info">
                            <h2>Welcome Adventurer!</h2>
                            <h3 id="username"></h3>
                            <h3 id="location"></h3>
                            <h3 id="hosting"></h3>
                            <h3 id="hours"></h3>
                            <h3 id="website"></h3>
                        </div>
                        <div className="fave-games">
                            <h3>Currently Playing: </h3>
                            <ul id="gameslist">

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        );
    }
}

export default Profile;