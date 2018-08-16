import React from 'react';

const Home = () => {
  return (
      <div>
    <div>
      I am the most awesome Home component
    </div>
    <button onClick={()=> console.log("Button clicked")}>Click me!</button>    
    </div>
  )
}

export default Home;