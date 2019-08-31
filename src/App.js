import React, { Component } from 'react';
import Ninjas from './Ninjas'

class App extends Component {
  state = {
    ninjas: [
      { name: 'Ryu', age: 20 },
      { name: 'Second', age: 20 },
      { name: 'Third', age: 20 },
      { name: 'Aung', age: 30 },
      
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>My first React app!</h1>
        <Ninjas ninjas={this.state.ninjas} />
      </div>
    );
  }
}

export default App;
