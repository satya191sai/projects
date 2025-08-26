function Datareading() {
   let eid=101
   let ename="satya"
   let city="bangalore"
   let ids=[101,102,103,104]
   let details={id:101,name:"satay"}
return <div>
    <h2>employee id:{eid}</h2>
    <h2>employee name:{ename}</h2>
    <h2>employee name:{ids}</h2>
    <h2>employee details:{JSON.stringify(details)}</h2>

</div>
}
export default Datareading