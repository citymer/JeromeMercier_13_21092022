import React from 'react'

const MainLogin = () => {
  return (
    <section className="signInContent">
      <i className="fa fa-user-circle signInIcon"></i>
      <h1>Sign In</h1>
      <form>
        <div className="inputWrapper">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" />
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

export default MainLogin
