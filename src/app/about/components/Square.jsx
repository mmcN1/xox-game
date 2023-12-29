'use client'

import { Component } from "react";

class Square extends Component {
    
    render() { 
        return (
            <button className="but" disabled={this.props.clicked} onClick={() => this.props.onClick()}>
			{this.props.value}  
		</button> 
        );
    }
}
 
export default Square;