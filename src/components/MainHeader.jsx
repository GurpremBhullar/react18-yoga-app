import {Link} from 'react-router-dom'
import Logo from '../images/yoga.png'
import '../index.css'
import React from 'react'

const MainHeader = () => {
  return (
    <header className='main__header'>
      <div className='container main__header-container'>
        <div className='main__header-left'>
          <h4>#100DaysOfFitness</h4>
          <h1>Yoga & Cardio</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
             mollitia placeat dolorem, odit odio illum necessitatibus omnis corporis fugiat tenetur.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam quo voluptatibus, 
            minus quod officia dolorem eius vero suscipit placeat praesentium.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Id dicta nesciunt possimus corrupti ea harum sunt aspernatur quo, natus numquam!
          </p>
          <Link to="/plans" className="btn md">Get Started</Link>
        </div>
        <div className='main__header-right'>
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Logo} alt='Main Logo' />
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader
