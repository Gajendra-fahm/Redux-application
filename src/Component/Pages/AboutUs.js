import React from 'react'

const AboutUs = ({setCOunter, counter}) => {

    const handleIncrement = ()=>{
        setCOunter(counter+1)
    }
  return (
    <div>
      <button onClick={handleIncrement }>increment</button>
    </div>
  )
}

export default AboutUs
