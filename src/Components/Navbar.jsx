import React, { useState } from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-scroll'

export const Navbar = () => {

    const [nav, setNav] = useState(false)

    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setNav(true)
        } else { setNav(false) }
    }
    window.addEventListener('scroll', changeBackground)

    return (
        <nav className={nav ? "nav active" : "nav"}>
            <Link to='#' className='logo'>
                <img src={logo} alt="" />
            </Link>
            <input type="checkBox" className="menu-btn" id='menu-btn' />
            <label htmlFor="menu-btn" className='menu-icon'>
                <span className='nav-icon'></span>
            </label>
            <ul className="menu">
                <li><Link to='main'         smooth={true} duration={1000}>Header</Link></li>
                <li><Link to='features'     smooth={true} duration={1000}>Feature</Link></li>
                <li><Link to='presentation' smooth={true} duration={1000}>OFTER</Link></li>
                <li><Link to='about'        smooth={true} duration={1000}>ABOUT</Link></li>
                <li><Link to='contact'      smooth={true} duration={1000}>CONTACT</Link></li>
            </ul>
        </nav>
    )
}
