import React from 'react'
import Logo from '../../assets/Logo.svg'
import './navbar.css'

import SearchIcon from '../../assets/search.png'

const Navbar = () => {
  return (
    <nav>
        <img src={Logo} alt="logo" />
        <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Special</li>
            <li>Menu</li>
            <li>Blogs</li>
        </ul>
        <img src={SearchIcon} alt="Search Icon" />
        <button>
            Book Now
        </button>
    </nav>
  )
}

export default Navbar