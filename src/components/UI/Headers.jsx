import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { GiWorld } from "react-icons/gi";

const Headers = () => {
  const [show, setShow] =useState(false)
  const handleButtonToggle=()=>{
    return setShow(!show)
  }
  return (
    <div className="container">
      <div className="grid navbar-grid">
        <div className="Logo">
          <NavLink to='/'>
          <h1>WorldAtlas</h1>
          </NavLink>
        </div>
        <nav className={show ?"menu-mobile": "menu-web"}> 
          <ul>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/about'>About</NavLink>
            </li>
            <li>
              <NavLink to='/country'>Country</NavLink>
            </li>
            <li>
              <NavLink to='/contact'>Contact</NavLink>
            </li>
          </ul>
        </nav>
        <div className="ham-menu">
            <button onClick={handleButtonToggle}>
            <GiWorld />
            </button>
          </div>
      </div>
    </div>
  )
}

export default Headers