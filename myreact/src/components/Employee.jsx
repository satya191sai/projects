import React, { Component } from "react";
class Employee extends Component{
    render(){
        return <div>
         <h2>Employee component</h2>
         <pre>{JSON.stringify(this.props)}</pre>
         <h1>user id:{this.props.props}</h1>
         <h1>user id:{this.props.crops}</h1>
        </div>
    }
}export default Employee