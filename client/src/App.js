import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import axios from "axios";
import MainPage from "./pages/main";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import Register from "./pages/signup";
import ResultsPage from "./pages/results";
import ProfilePage from "./pages/profile";
import AddEventPage from "./pages/addEvent";
import FindGuildStorePage from "./pages/findGuildStore";
import FindGuildUserPage from "./pages/findGuildUser";
// import FindStorePage from "./pages/findStore";
import NoMatchPage from "./pages/nomatch";


class App extends Component {

  constructor() {
    super();
    this.state =  {
      loggedIn: false,
      email: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }


  componentDidMount() 
  {
    this.getUser()
  }

  updateUser(userObject) {
    this.setState(userObject)
  }

  getUser() {
    if (sessionStorage.getItem("loggedIn") === null) {
      console.log('Get user: no user');
      return false;
    } else {
      console.log('Get User: There is a user saved in the server session: ');
      console.log("Logged in as: " + sessionStorage.getItem("loggedAs"));
      return true;
    }
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/login" render={() => sessionStorage.getItem("loggedIn") === null ? (<LoginPage />) : (<Redirect to="/home" />)}/>
            <Route exact path="/register" render={() => sessionStorage.getItem("loggedIn") === null ? (<Register/>) : (<Redirect to="/home" />)}/>
            <Route exact path="/results" render={() => sessionStorage.getItem("loggedIn") != null ? (<ResultsPage/>) : (<Redirect to="/login" />)}/>
            <Route exact path="/addEvent" render={() => sessionStorage.getItem("loggedIn") != null ? (<AddEventPage/>) : (<Redirect to="/login" />)} />
            <Route exact path="/profile" render={() => sessionStorage.getItem("loggedIn") != null ? (<ProfilePage/>) : (<Redirect to="/login" />)} />
            <Route exact path="/findGuild" render={() => sessionStorage.getItem("loggedIn") != null && sessionStorage.getItem("is_Store") === "yes" ? (<Redirect to="/findGuildStore"/>) : (<Redirect to="/findGuildUser" />)}/>
            <Route exact path="/findGuildStore" render={() => sessionStorage.getItem("loggedIn") != null ? (<FindGuildStorePage/>) : (<Redirect to="/login" />)}/>
            <Route exact path="/findGuildUser" render={() => sessionStorage.getItem("loggedIn") != null  ? (<FindGuildUserPage/>) : (<Redirect to="/login" />)} />
            {/* <Route exact path="/findStore" component= {FindStorePage} /> */}
            <Route component= {NoMatchPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
