"use client";

import { Component } from "react";
import CheckUser from "./components/CheckUser";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
       userName: "",
      check: false 
      };
  }

  render() {
    let {userName, check} = this.state
    const handleChange = (e) => {
      
      this.setState({ userName: e.target.value });
      console.log(userName.length)
    };
    const handleClick = () => {
      if (userName.length >= 2) {
        this.setState({ check: true });
      } else {
        alert("Please Name");
        this.setState({ check: false });
      }
    };
    return (
      <div className="min-h-screen p-24">
        <CheckUser userName={this.state.userName} check={this.state.check} handleChange={handleChange} handleClick={handleClick}  />
      </div>
    );
  }
}

export default App;
