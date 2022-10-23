import {Link} from 'react-router-dom'
import Logo from '../images/yoga.png'
import '../index.css'

import React from 'react'

const MainHeader = () => {
  return (
    <header className='main__header'>
      <div className='container main__header-container'>
        <div className='main__header-left'>
          <h4>Tap into your energy</h4>
          <h1>Yoga & Cardio</h1>
          <p>a deep breathe for your mind and body
            its important to take time to invest in your 
            mental well being and health. 
            
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
