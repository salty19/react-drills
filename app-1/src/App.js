import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  constructor() {
    super()

    this.state = {
      userInput: ''
    }
  }

  handleChange(val) {
    this.setState({ userInput: val})
  }



  render(){
    return (
      <div>
        <input className="userInput" onChange={ (e) => this.handleChange (e.target.value) } />
        <span className="results">{this.state.userInput}</span>
      </div>
    )
  }
}

export default App;
