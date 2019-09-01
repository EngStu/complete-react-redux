import React from 'react'

const Ninjas = ({ ninjas }) => {
  
    const ninjaList = ninjas.map(ninja => {
      return ninja.age > 18 ? (
        <div className="ninja" key={ninja.id}>
          <h2>Name: { ninja.name }</h2>
          <h2>Age: { ninja.age }</h2>
        </div>
      ) : null;
    })


  return(
    <div className="ninja-list">
      { ninjaList }
    </div>
  )
}

export default Ninjas