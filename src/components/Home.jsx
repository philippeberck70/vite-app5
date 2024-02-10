import React from 'react'
import { useNavigate } from 'react-router-dom';
import image1 from '../../image1.jpg'

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className='row'>
      <div className='col border p-3'>
        <h3>Exercices de français</h3>
        <p><strong>Gopb</strong> est un site Internet pour tester ses compétences en orthographe.</p>
        <button onClick={() => navigate("/exercices")} className='btn btn-secondary'>Commencer</button>
      </div>
      <div className='col'>
        <img src={image1} className="rounded float-start" alt="..."></img>
      </div>


    </div>
  )
}

export default Home