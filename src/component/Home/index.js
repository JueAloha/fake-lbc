import React, { Component, Fragment } from "react";
import Header from "../Header";
import AddList from "../AddList";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <AddList />
      </Fragment>
    );
  }
}

export default Home;
