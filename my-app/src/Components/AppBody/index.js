import React, { Component } from "react";
import'./index.css';
export default class AppBody extends Component{

    constructor(props){
            super(props);   
            this.state={
                'firstname':'',
                'lastname' :'',
                'result':''
            }
    }
    handleInputChange=(e) =>{
        const target =e.target;
        const name = target.name;
        const value=target.value;
        this.setState({
            [name]:value
        })
        console.log(this.state.firstname);
        console.log(this.state.lastname);
    }

    onSubmit=()=>{
        const result=parseInt(this.state.firstname) +parseInt(this.state.lastname);
        this.setState({
            result:result
        })
    }
    render(){

        return(
            <div className="AppBody">
                <input className="input" name="firstname" type ="text" onChange={this.handleInputChange} value={this.state.firstname} placeholder="Enter Firstname"/><br/>
                <input className="input" name="lastname"  type ="text" onChange={this.handleInputChange} value={this.state.lastname} placeholder = "Enter Lastname"/><br/>
                <div className="SubmitContainer">
                <button className="submit" onClick={this.onSubmit}>Submit</button>
                </div>
                <div className="ResultContainer">
                <h4 className="result1">{this.state.firstname} {this.state.lastname}</h4>
                
                <h4 className="result2">{this.state.result}</h4>
                </div>
            </div>
        )
    }
}