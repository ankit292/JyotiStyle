import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import Logo from './../images/logo.png'
export default function Header() {
  return (
    <div>
      <header className="site-header">
        <div className="container">
            <Link id="branding" to="/">
                <img src={Logo} alt="Company name" className="logo" />
                <div className="logo-copy">
                    <h1 className="site-title">Company Name</h1>
                    <small className="site-description">Slogan goes here</small>
                </div>
            </Link> 

            
            {/* <!-- Default snippet for navigation --> */}
            <div className="main-navigation">
                <button type="button" className="menu-toggle"><i className="fa fa-bars"></i></button>
                <ul className="menu">
                    <li className="menu-item">
                      <NavLink
                        to="/"
                        // className={({ isActive, isPending }) =>
                        //   isPending ? "pending" : isActive ? "active" : ""
                        // }
                        // exact
                        // activeclassname="active"
                      >
                        Home
                      </NavLink>
                      </li>
                    <li className="menu-item">
                      <NavLink
                        to="/about"
                        // className={({ isActive, isPending }) =>
                        //   isPending ? "pending" : isActive ? "active" : ""
                        // }
                        // exact
                        // activeclassname="active"
                      >
                        About
                      </NavLink>
                      </li>
                    <li className="menu-item">
                      <NavLink
                        to="/service"
                        // className={({ isActive, isPending }) =>
                        //   isPending ? "pending" : isActive ? "active" : ""
                        // }
                        // exact
                        // activeclassname="active"
                      >
                        Services
                      </NavLink>
                      </li>
                    <li className="menu-item">
                      <NavLink
                        to="/gallery"
                        // className={({ isActive, isPending }) =>
                        //   isPending ? "pending" : isActive ? "active" : ""
                        // }
                        // exact
                        // activeclassname="active"
                      >
                        Gallery
                      </NavLink>
                      </li>
                    <li className="menu-item">
                      <NavLink
                        to="/contact"
                        // className={({ isActive, isPending }) =>
                        //   isPending ? "pending" : isActive ? "active" : ""
                        // }
                        // exact
                        // activeclassname="active"
                      >
                        Contact
                      </NavLink>
                    </li>
                </ul> 
            </div>

            <div className="mobile-navigation"></div>
        </div>
      </header>
    </div>
  )
}
