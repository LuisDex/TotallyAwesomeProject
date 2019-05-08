import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./pages/main";
import LoginPage from "./pages/login";
import Register from "./pages/signup";
import ResultsPage from "./pages/results";
import ProfilePage from "./pages/profile";
import FindGuildPage from "./pages/findGuild";
import NoMatchPage from "./pages/nomatch";


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/login" component= {LoginPage} />
            <Route exact path="/register" component= {Register} />
            <Route exact path="/results" component= {ResultsPage} />
            <Route exact path="/profile" component= {ProfilePage} />
            <Route exact path="/findGuild" component= {FindGuildPage} />
            <Route component= {NoMatchPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
