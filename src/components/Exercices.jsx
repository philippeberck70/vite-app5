import React from 'react'
import { Link } from 'react-router-dom'

const Exercices = () => {
  const exercicesList = [
    {
      id: 1,
      name: "Ex. 1"
    },
    {
      id: 2,
      name: "Ex. 2"
    }
  ]
  return (
    <>
      <h3>Exercices</h3>
      <div className="list-group">
        {
          exercicesList && exercicesList.map((exercice) => (
            <Link key={exercice.id} to={`/exercices/${exercice.id}?name=${exercice.name}`} className='list-group-item list-group-item-action'>{exercice.name}</Link>
          ))
        }
      </div>
    </>
  )
}

export default Exercices