import React from 'react'

const Ninjas = ({ ninjas, deleteNinja }) => {
  
  const ninjaList = ninjas.map(ninja => {
    return ninja.age > 18 ? (
      <div className="ninja" key={ninja.id}>
        <h2>Name: { ninja.name }</h2>
        <h2>Age: { ninja.age }</h2>
        <button onClick={() => {deleteNinja(ninja.id)}}>Delete</button>
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