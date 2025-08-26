import React, { Component } from "react";
import Employee from "./Employee";
class User extends Component{
    id=101
    name="satya"
    render(){
        return <div>
        <h2>User component</h2>
        <Employee props={this.id} crops={this.name}/>
        </div>
    }
}export default User