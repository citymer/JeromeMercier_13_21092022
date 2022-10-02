import React, { useEffect, useState } from 'react'
import { authentification } from '../services/API'
import { useStore, useSelector } from 'react-redux'

import { Navigate } from 'react-router-dom'
//import { authResolved } from '../features/connextionSlice'

const MainLogin = () => {
  const store = useStore()
  const logged = useSelector((state) => state.connect.isAuthenticate)
  const error = useSelector((state) => state.connect.error)
  const status = useSelector((state) => state.connect.status)
  const [isLoading, setIsLoading] = useState(false)

  console.log(logged)
  useEffect(() => {
    if (status === 'pending') {
      setIsLoading(true)
    }
    if (status === 'rejected') {
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [status])

  function handleSubmit(e) {
    e.preventDefault()
    const logCredential = {
      email: document.querySelector('#username').value,
      password: document.querySelector('#password').value,
      rememberMe: document.querySelector('#remember-me').checked,
    }
    authentification(store, logCredential)
  }
  if (logged) {
    return <Navigate to="/profile" />
  } else {
    return (
      <section className="signInContent">
        <i className="fa fa-user-circle signInIcon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="inputWrapper">
            <label htmlFor="username">Username</label>
            <input type="email" id="username" name="username" />
          </div>
          <div className="inputWrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="inputRemember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>

          <input type="submit" value="Sign In" className="signInButton"></input>
        </form>
      </section>
    )
  }
}

export default MainLogin
