import React from 'react'
//import logo from './logo.svg'
//import { Counter } from './features/counter/Counter'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import './styles/index.css'

function App() {
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
