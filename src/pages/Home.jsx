import React from 'react'
import Features from '../components/Features'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
//import axios from 'axios'

const Home = () => {
  //const response = axios.post('http://localhost:3001/api/v1/user/')
  // console.log(response)

  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  )
}

export default Home
