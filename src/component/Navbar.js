import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="logo"> 
        <img src="./images/brand_logo.png" alt="" />
        </div>
        <ul>
            <li>MENU</li>
            <li>LOCATION </li>
            <li>ABOUT</li>
            <li>CONTACT</li>
        </ul>
        <button className='login'>Login</button>

        
      </nav>
    </div>
  )
}

export default Navbar
