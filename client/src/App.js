import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./pages/main";
import LoginPage from "./pages/login";
import Register from "./pages/signup";
import Results from "./pages/results";
import Profile from "./pages/profile";
import NoMatch from "./pages/nomatch";


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/login" component= {LoginPage} />
            <Route exact path="/register" component= {Register} />
            <Route exact path="/results" component= {Results} />
            <Route exact path="/profile" component= {Profile} />
            <Route component= {NoMatch} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
