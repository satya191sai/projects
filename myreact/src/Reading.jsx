import React, { Component } from "react";
class Reading extends Component{
   eid=101
   ename="satya"
   EMP={id:101,name:"kumar"}

    render(){
       return <div>
        <h2>employee id:{this.eid}</h2>
        <h2>employee name:{this.ename}</h2>
        <h2>employee name:{this.EMP.id}</h2>
        </div>
    }
}export default Reading