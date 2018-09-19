import React, { Component, Fragment } from "react";
import "./App.css";
import AddList from "./component/AddList";
//import Header from "./component/Header";

class App extends Component {
  render() {
    return (
      <Fragment>
        <AddList />
      </Fragment>
    );
  }
}

export default App;
