import React from "react";
import ClassComponentMain from "./ClassComponentMain";

export default class ClassComponent extends React.Component{
    constructor(){
        super()
      this.state=  {name:"Gajendra"}
      this.nameHeadingRef = React.createRef();
    }
    updateName = ()=>{
       
        this.setState((prev)=>({
            name:prev.name  === "Gajendra" ? "RAVi" :"Gajendra"
        }))  
        if (this.nameHeadingRef.current) {
            this.nameHeadingRef.current.style.color = this.state.name === "Gajendra" ? "blue" : "green";
        }
       
    }
    render(){
        return(
            <> 
             <p>Hello</p>
             <h2 ref={this.nameHeadingRef}>{this.state.name}</h2>
             <button onClick={this.updateName}>update </button>
             <ClassComponentMain name={this.state.name}/>
            </>
        )
    }
}