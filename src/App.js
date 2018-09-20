import React, { Component, Fragment } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./component/Home";
import AddView from "./component/AddView";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/AddView" component={AddView} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;
