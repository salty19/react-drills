import React, {Component} from 'react';
import './App.css';

class App extends Component {

constructor(){
  super()

  this.state = {
    userInput: '',
    foodList: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese']
  }
}

handleChange(val) {
  this.setState({userInput: val})
}

render(){
  let foodsToDisplay = this.state.foodList.map( (element, index) => {
    return <h2 key={index}>{element}</h2>
  })

  return (
  <div>
    <input className="userInput" onChange={ (e) => this.handleChange (e.target.value)} />
    <span className="results">{this.state.userInput}</span>
    <p className="App">{foodsToDisplay}</p>
    <p> FilterObject Comp </p>
  </div>
  )
}

}

export default App;
