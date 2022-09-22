import React from 'react'
import background from '../assets/bank-tree.jpeg'

const Hero = () => {
  return (
    <div className="hero" style={{ backgroundImage: `url(${background})` }}>
      <section class="heroContent">
        <h2 class="sr-only">Promoted Content</h2>
        <p class="subtitle">No fees.</p>
        <p class="subtitle">No minimum deposit.</p>
        <p class="subtitle">High interest rates.</p>
        <p class="text">Open a savings account with Argent Bank today!</p>
      </section>
    </div>
  )
}

export default Hero
