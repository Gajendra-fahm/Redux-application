import React, { useState } from 'react'

const CountChecks = () => {
  const [count , setCount]=  useState(0)
  return (
    <div>
     <button onClick={()=> setCount(count +1)} >inc</button>
        <span>{count}</span>
     <button  onClick={()=>{
        if(count <=0){
            setCount(0)
        }else{
            setCount(count-1)
        }
     }}
     disabled={count <= 0} 
     >dec</button>
    </div>
  )
}

export default CountChecks
