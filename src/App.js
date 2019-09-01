import React, { Component } from 'react';
import Ninjas from './Ninjas'
import AddNinja from './AddNinja'
import SearchNinja from './SearchNinja';

class App extends Component {
  state = {
    ninjas: [
      { name: 'Ryu', age: 12, id: 1 },
      { name: 'Second', age: 20, id: 2 },
      { name: 'Third', age: 15, id: 3 },
      { name: 'aa', age: 30, id: 4 },
    ],
    result: ''
  }

  addNinja = (ninja) => {
    ninja.id = Math.floor(Math.random() * (10 - 5) + 5)
    let ninjas = [...this.state.ninjas, ninja]
    this.setState({
      ninjas
    })
  }

  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    })
    this.setState({
      ninjas
    })
  }

  searchNinja = (name) => {
    let result = this.state.ninjas.filter(ninja => {
      return ninja.name === name
    })
    let fullResult = 'Name: ' + result[0].name + ' and age : ' + result[0].age
    this.setState({
      result: fullResult // only need object
    })
    // console.log('Name: ' + result[0].name);
    
  }

  render() {
    return (
      <div className="App">
        <h1>My first React app!</h1>
        <SearchNinja searchNinja={this.searchNinja} result={this.state.result} />
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;
