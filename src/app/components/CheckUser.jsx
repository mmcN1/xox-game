"use client";

import Link from "next/link";
import { Component } from "react";

class CheckUser extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    let {userName, check, handleChange, handleClick} =this.props
    


    return (
      <div>
        <h1>Enter Your Name</h1>
        <input
          className="p-2 rounded-xl m-1 text-left"
          onChange={handleChange}
        />
        <button value={userName} className="bg-slate-400 p-2 rounded-xl" onClick={handleClick}>
          {check ? <Link href="/about">Submit</Link> : "Submit"}
        </button>
        {check ? <p>Click until you enter the game</p> : ""}
      </div>
    );
  }
}

export default CheckUser;
