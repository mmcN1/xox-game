"use client";

import { Component } from "react";
import CheckUser from "./components/CheckUser";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
       userName: "Mehmet",
      check: false 
      };
  }

  render() {
    return (
      <div className=" concon min-h-screen p-24">
        <CheckUser userName={this.state.userName} check={this.state.check} />
      </div>
    );
  }
}

export default App;
