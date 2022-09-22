import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/argentBankLogo.png'

const HeaderProfile = () => {
  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link className="main-nav-item" to="./profile">
          <i class="fa fa-user-circle circle"></i>
          Tony
        </Link>
        <Link className="main-nav-item" to="./">
          <i className="fa fa-sign-out circle"></i>
          Sign Out
        </Link>
      </div>
    </nav>
  )
}

export default HeaderProfile
