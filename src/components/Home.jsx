import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className='row'>

      <div className='col'>
        <h3>Exercices de français</h3>
        <p>Gopb est un site Internet pour tester ses compétences en orthographe.</p>
        <button onClick={() => navigate("/exercices")} className='btn btn-secondary'>Commencer</button>
      </div>
      <div className='col'>
        <img src="image1.jpg" className="rounded float-start" alt="..."></img>
      </div>


    </div>
  )
}

export default Home