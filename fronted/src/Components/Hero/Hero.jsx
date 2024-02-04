import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-left'>
    <h2>New Arrivals Only</h2>
    <div>
    <div className='hand-hand-icon'>
      <p>New</p>
      <img src='/public/hand_icon.png' alt=''/>
    </div>
    <p>collactions</p>
    <p>for everyone</p>
      </div>
      <div className='hero-latest-btn'>
        <div>Latest Collection</div>
        <img src='/public/arrow.png' alt=''/>
      </div>
      </div>
      {/* Hero-Right Side */}
      <div className='hero-right'>
    <img src='/public/hero_image.png' alt=''/>
      </div>
    </div>
  )
}

export default Hero
