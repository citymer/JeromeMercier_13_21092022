import React, { useEffect, useState } from 'react'
import { authentification } from '../services/API'
import { useStore, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const MainLogin = () => {
  const store = useStore()
  const logged = useSelector((state) => state.isAuthenticate)
  const error = useSelector((state) => state.error)
  const status = useSelector((state) => state.status)
  const [isLoading, setIsLoading] = useState(false)

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
      <div>
        {isLoading ? (
          <p>Chargement...</p>
        ) : (
          <section className="signInContent">
            <i className="fa fa-user-circle signInIcon"></i>
            <h1>Sign In</h1>
            {error.status === 400 ? (
              <span className="error-msg">
                Mauvais identifiant ou mot de passe
              </span>
            ) : error.status !== null && error.status !== 400 ? (
              <span className="error-mdg">
                Une erreur est survenue : {error.message}
              </span>
            ) : null}
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

              <input
                type="submit"
                defaultValue="Sign In"
                className="signInButton"
              ></input>
            </form>
          </section>
        )}
      </div>
    )
  }
}

export default MainLogin
