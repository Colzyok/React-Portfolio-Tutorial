import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import logo from './Image/logo.png'

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <a className="navbar-brand" href="#link">
              <img src={logo} alt="logo" className="logo" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <FontAwesomeIcon icon={faBars} style={{color: "#fff"}} />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#link">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#link">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#link">portfolio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#link">services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#link">contact</a>
                </li>
              </ul>
            </div>
          </div>
      </nav>
    </>
  )
}

export default NavBar
