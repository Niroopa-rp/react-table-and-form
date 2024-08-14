import React from 'react';
import ReactDOM from 'react-dom';
function Header(){
  return(
    <div>
      <h1>HOW TO BUILD YOUR PROFILE?</h1>
      <h2>Introduction</h2>
    </div>
    )
  }
  function Footer(){
    return(
      <div>
        {/* <h1>rdtgrdrd</h1> */}
        <h3>This is Niroopa currently purusing engineering in Information technology.</h3>
      </div>
    )
  }
  function Newwebsite(){
    return(
      <div>
          {/* <h1>rdtgrdrd</h1> */}
        <h3>Let's learn to build our profile.</h3>
      </div>
    )
  }
  function Mydemowebsite(){
    return(
      <div>
        <Header/>
        <Footer/>
        <Newwebsite/>
      </div>
    )
  }
  ReactDOM.render(<Mydemowebsite/>,document.getElementById("root"));




