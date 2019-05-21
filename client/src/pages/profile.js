import React, { Component } from "react";
import Profile from "./../components/Profile";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";

class ProfilePage extends Component {

    componentDidMount() 
    {
      this.getUserInfo();
    }

    getUserInfo()
    {
    axios.get('api/user?email=' + sessionStorage.getItem("loggedAs"))
  .then(function (response) {
    // handle success
    console.log(response.data);
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
                <Header />
                <Profile />
                <Footer />
            </div>
        );
    }
}

export default ProfilePage;