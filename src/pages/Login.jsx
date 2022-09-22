import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import MainLogin from '../components/MainLogin'

const Login = () => {
  return (
    <div>
      <Header />
      <main className="main bg-dark">
        <MainLogin />
      </main>
      <Footer />
    </div>
  )
}

export default Login
