import React, { useState } from "react";
import AboutUs from "./AboutUs";


const HomeDemo = ()=>{

    const [counter, setCOunter]= useState(0)

    return(
        <div>
            <p>{counter}</p>
          <AboutUs setCOunter={setCOunter} counter={counter}/>
        </div>
    )
}
export default HomeDemo