import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(){
    super()

    this.state = {
        list: [],
        input: '',
    }


}


render() {
  let list = this.state.list.map((element, index) => {
    return <Todo key={index} task={element} />
  })
    return (
        <div>
            <h1></h1>
            <div>
                <input />
                <button></button>
            </div>

            <br />

            {list}
        </div>
    )
}
}


export default App;
