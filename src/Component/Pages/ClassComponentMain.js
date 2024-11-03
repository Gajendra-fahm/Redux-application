import React from "react";

export default class ClassComponentMain extends React.Component{
   
    render(){
        return(
            <>
             <p>ClassComponent Main</p>
               <h2>{this.props.name}</h2>     
            </>
        )
    }
}