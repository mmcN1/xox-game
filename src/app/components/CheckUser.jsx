import Link from "next/link";
import { Component } from "react";

class CheckUser extends Component {
    state = {  } 
    render() { 
        let userName = this.state.userName
        let check = this.state.check
        const handleChange = (e) => {
            
            this.setState({userName: e.target.value})
        
        }
        const handleClick = () => {
            
            if(userName.length >= 3) {
                check = true
            }else {
                alert('Please Name')
                check= false
            }
            this.setState({check: check})
            console.log(check)
        }
        return (<div>
            <h1>Enter Your Name</h1>
            <input className="p-2 rounded-xl m-1 text-left" onChange={handleChange} />
            <button className="bg-slate-400 p-2 rounded-xl" onClick={handleClick}>{check ? <Link href='/about'>Submit</Link> : 'Submit'}</button>
        </div>);
    }
}
 
export default CheckUser;