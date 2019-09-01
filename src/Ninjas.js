import React from 'react'

const Ninjas = ({ ninjas, deleteNinja }) => {
  
  const ninjaList = ninjas.map(ninja => {
    return ninja.age > 18 ? (
      <div className="ninja" key={ninja.id}>
        <h5>Name: { ninja.name }</h5>
        <h5>Age: { ninja.age }</h5>
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