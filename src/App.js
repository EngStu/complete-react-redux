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

  render() {
    return (
      <div className="App">
        <h1>My first React app!</h1>
        <Ninjas ninjas={this.state.ninjas} />
        <AddNinja />
      </div>
    );
  }
}

export default App;
