import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import '../src/styles/index.scss'
import { useDispatch, useStore } from 'react-redux'
import { authFetching } from './features/connextionSlice'
import { getUserProfil } from './services/API'

function App() {
  const dispatch = useDispatch()
  const store = useStore()

  useEffect(() => {
    const checkAutoLogin = (store, dispatch) => {
      const tokenString = localStorage.getItem('token')
      if (!tokenString) {
        return
      }
      const token = JSON.parse(tokenString)
      dispatch(authFetching())
      getUserProfil(store, token)
    }

    checkAutoLogin(store, dispatch)
  })
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/*" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
