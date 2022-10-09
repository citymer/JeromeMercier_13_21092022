import React from 'react'
import Welcome from '../components/Welcome'
import Footer from '../components/Footer'
import HeaderProfile from '../components/HeaderProfile'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const Profile = () => {
  const logged = useSelector((state) => state.isAuthenticate)
  const token = JSON.parse(localStorage.getItem('token'))

  if (!logged && !token) {
    return <Navigate to="/" />
  } else {
    return (
      <div>
        <HeaderProfile />
        <Welcome />
        <Footer />
      </div>
    )
  }
}

export default Profile
