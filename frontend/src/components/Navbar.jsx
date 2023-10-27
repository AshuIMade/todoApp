import { useState } from "react"
import { NavLink, Link } from "react-router-dom"
import { FaBars } from 'react-icons/fa'
import {MdOutlineClose} from 'react-icons/md'
//import Logo from '../images/logo.svg'
import Logo from '../images/logo-white.png'

import './Navbar.css'

function Navbar({ links }) {
  const [isNavShowing, setIsNavShowing] = useState(false);

  return (
    <nav>
      <div className='container nav_conatiner'>
        <Link to='/' className='logo' onClick={()=>setIsNavShowing(false)}>
          <img src={Logo} alt='Nav Log' />
        </Link>
        <ul className={`nav_links ${isNavShowing ? 'show_nav':'hide_nav'}`}>
          {links.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <NavLink to={path} className={({isActive})=>isActive?'active-nav':''} onClick={()=> setIsNavShowing(prev=>!prev)} name={name}>{name }</NavLink>
              </li>
            ) 
          })}
        </ul>
        <button className='nav_toggle-btn' onClick={()=> setIsNavShowing(prev=>!prev)}>
          {isNavShowing ? <MdOutlineClose/> : <FaBars />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar