import React, {Component} from 'react';
import './App.css';

class App extends Component {

constructor(){
  super()

  this.state = {
    filterInput: '',
    foodList: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese'],
  }
}

handleChange(filter) {
  this.setState({filterInput: filter})
}


render(){
  let foodsToDisplay = this.state.foodList
    .filter((element, index) => {
      return element.includes(this.state.filterInput)
    })
  
    .map( (element, index) => {
      return <h2 key={index}>{element}</h2>
    })

  return (
    <div>
      <input onChange={ (e) => this.handleChange (e.target.value)} type="text" />
      {foodsToDisplay}
    </div>
  )
}

}

export default App;
