import React from 'react'
import Navbar from './Navbar'
function Header() {
  return (
    <div id='main'>
      <Navbar />
      <div className="name" id='home'>
        <h1><span>Lunch Your App</span> Which Confidence and creativity</h1>
        <p className="details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dolorum consequuntur dolore laborum aliquam.</p>
        <a href="#" className="cv-btn">Download</a>
      </div>
    </div>
  )
}

export default Header