import React, { Component } from 'react';
import Ninjas from './Ninjas'
import AddNinja from './AddNinja'

class App extends Component {
  state = {
    ninjas: [
      { name: 'Ryu', age: 12, id: 1 },
      { name: 'Second', age: 20, id: 2 },
      { name: 'Third', age: 15, id: 3 },
      { name: 'Aung', age: 30, id: 4 },
      
    ]
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

  componentDidMount() {
    console.log('component mounted')
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('component updated')
    console.log(prevProps, prevState)
  }

  render() {
    return (
      <div className="App">
        <h1>My first React app!</h1>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;
