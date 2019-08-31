import React, { Component } from 'react'

class Ninjas extends Component {
  render() {
    const { ninjas } = this.props
    const ninjaList = ninjas.map(ninja => {
      return (
        <div className="ninja">
          <h2>Name: { ninja.name }</h2>
          <h2>Age: { ninja.age }</h2>
        </div>
      )
    })
    return(
      <div className="ninja-list">
        { ninjaList }
      </div>
    )
  }
}

export default Ninjas