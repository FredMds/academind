import React from "react";
// import Radium from 'radium';
import "./Person.css"

const person = (props) => {
  // const styleRadium = {
  //   '@media (min-width : 800px)': {
  //     width: '450px'
  //   }
  // };
  return(
    <div className="Person"
    // style={styleRadium}
    >
      <p onClick={props.cliquetis}>Hello, I am the Component Color and my color is {props.color}. I come from {props.country} and this is number {Math.floor(Math.random() *100)} test number </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.color}/>
    </div>
  )
};

// export default Radium(person);
export default person;
