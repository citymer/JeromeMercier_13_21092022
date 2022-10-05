import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import logo from '../assets/argentBankLogo.png'
import { logout } from '../features/root.reducer'
import { useNavigate } from 'react-router-dom'

const HeaderProfile = () => {
  const firstName = useSelector((state) => state.user.firstName)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const disconnect = (e) => {
    e.preventDefault()
    localStorage.clear()
    dispatch(logout())
    navigate('/')
  }

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
          <i className="fa fa-user-circle circle"></i>
          {firstName}
        </Link>
        <Link className="main-nav-item" onClick={disconnect} to="/">
          <i className="fa fa-sign-out circle"></i>
          Sign Out
        </Link>
      </div>
    </nav>
  )
}

export default HeaderProfile
