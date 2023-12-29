import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'

import { useState } from "react"
import { NavLink, Link } from "react-router-dom"
import { FaBars } from 'react-icons/fa'
import {MdOutlineClose} from 'react-icons/md'
//import Logo from '../images/logo.svg'
import Logo from '../images/logo-white.png'

import './Navbar.css'

function Navbar({ unSignedLinks, signedLinks }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)
  const [isNavShowing, setIsNavShowing] = useState(false);

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  return (
    <nav>
      <div className='container nav_conatiner'>
        <Link to='/' className='logo' onClick={()=>setIsNavShowing(false)}>
          <img src={Logo} alt='Nav Log' />
        </Link>
        <ul className={`nav_links ${isNavShowing ? 'show_nav':'hide_nav'}`}>
          {user ? signedLinks.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <NavLink to={path}
                  className={({ isActive }) => isActive ? 'active-nav' : ''}
                  onClick={() => setIsNavShowing(prev => !prev)}
                  name={name}>{name}
                </NavLink>
              </li>
            ) 
          }):unSignedLinks.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <NavLink to={path}
                  className={({ isActive }) => isActive ? 'active-nav' : ''}
                  onClick={() => setIsNavShowing(prev => !prev)}
                  name={name}>{name}
                </NavLink>
              </li>
            ) 
          })}
        </ul>
        <div className="signOut_wrapper">
          {user && <button className='signout_btn' onClick={onLogout}><FaSignOutAlt /> Signout</button>}
        </div>
        <button className='nav_toggle-btn' onClick={()=> setIsNavShowing(prev=>!prev)}>
          {isNavShowing ? <MdOutlineClose/> : <FaBars />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar