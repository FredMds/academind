import React, { Component } from 'react';
import './App.css';
// import Radium, {StyleRoot} from 'radium';
import Person from "./Components/Person";

class App extends Component {
  state= {
    variousComponents: [
      {id: 'azer1', color:'red', country:'France'},
      {id: 'azer2', color:"blue", country:"Germany"},
      {id: 'azer3', color:"green", country:"Portugal"}
    ],
    otherState: 'some other value',
    showColor: false
  }

colorChangeHandler = (event, id) => {
const colorIndex = this.state.variousComponents.findIndex( c => {
  return c.id === id;
});

const couleur = {
  ...this.state.variousComponents[colorIndex]
};

couleur.color = event.target.value;

const variousComponents = [...this.state.variousComponents];
variousComponents[colorIndex] = couleur;

    this.setState( {variousComponents: variousComponents} );
}

deleteColorHandler = (colorIndex) => {
  // const variousComponents = this.state.variousComponents.slice();
  const variousComponents = [...this.state.variousComponents];
  variousComponents.splice(colorIndex, 1);
  this.setState({variousComponents : variousComponents})
}


toggleColorHandler = () => {
  const doesShow = this.state.showColor;
  this.setState({showColor: !doesShow});
}

  render() {
    const style = {
      backgroundColor: "green",
      font: 'inherit',
      border : '1px grey',
      padding: '8px',
      cursor: 'pointer',
      color: "white",
      borderRadius: "5%",
      // ':hover': {
      //   backgroundColor: 'lightgreen',
      //   color: 'black',
      // }
    };

    let variousComponents = null;

    if (this.state.showColor === true) {
      variousComponents = (
        <div>
        {this.state.variousComponents.map((oneComponent, index) => {
          return <Person
            cliquetis={() => this.deleteColorHandler(index)}
            color={oneComponent.color}
            country={oneComponent.country}
            key ={oneComponent.id}
            changed ={(event) => this.colorChangeHandler(event, oneComponent.id)}
             />
        })
        }
        </div>
      );

style.backgroundColor = "darkred";
style[':hover'] = {
  backgroundColor: "salmon",
  color: "black"
}

    }

const classes = [];
if (this.state.variousComponents.length <=2) {
  classes.push('red');
}

if (this.state.variousComponents.length <= 1) {
  classes.push('bold');
}

    return (
      // <StyleRoot>
        <div className="App">
        <h1>Hello World</h1>
        <p className={classes.join(' ')}> Write the color you want in the field </p>
        <button
           style={style}
           onClick={this.toggleColorHandler}>Switch Color</button>
        {variousComponents}
        </div>
      // </StyleRoot>
    );
  }
}

export default App;
// export default Radium(App);
