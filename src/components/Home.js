import React from 'react'
import {Link} from 'react-router-dom'
import exercice1 from '../images/exercice1.PNG'
import exercice2 from '../images/exercice2.PNG'
import './styles/home.css'


function Home() {
  return (
    <div className="home-container">
      <div className="exercise-card">
        <img src={exercice1} alt="Exercise 1" className="exercise-image" />
        <div className="exercise-info">
          <h3>Exercice 1</h3>
          <p>Task Manager</p>
          <Link to="/task-manager" className="exercise-link">Voir Exercice</Link>
        </div>
      </div>

      <div className="exercise-card">
        <img src={exercice2} alt="Exercise 2" className="exercise-image" />
        <div className="exercise-info">
          <h3>Exercice 2</h3>
          <p>Digital Clock</p>
          <Link to="/digital-clock" className="exercise-link">Voir Exercice</Link>
        </div>
      </div>
    </div>
  )
}

export default Home