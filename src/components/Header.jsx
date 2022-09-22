import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/argentBankLogo.png'

const Header = () => {
  return (
    <header className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="srOnly">Argent Bank</h1>
      </Link>
      <div className="a">
        <Link className="main-nav-item" to="/">
          <i className="fa fa-user-circle"></i>
          Sign In
        </Link>
      </div>
    </header>
  )
}

export default Header
