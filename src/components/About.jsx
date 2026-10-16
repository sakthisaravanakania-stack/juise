import React from 'react'
import AboutImg from './about.jpeg'

const About = () => {
  return (
    <div className='about'>
      <div className='about-content'>
        <h1>🍃 Fresh Vibes <i class="fa-brands fa-pagelines"></i></h1>
        <h2>🌿 Welcome to Fresh Vibes, where freshness meets happiness <i class="fa-solid fa-glasses"></i></h2>
        <h3>🍊 We bring you the natural goodness of fresh and juicy fruits <i class="fa-solid fa-tablets"></i></h3>
      </div>

      <div className='about-image'>
        <img src={AboutImg} alt="" />
      </div>

      <div className='about-main'>
        <h4>🍓 Every juice is blended with love, care, and quality ingredient.</h4>
        <h4><i class="fa-regular fa-lemon"></i> Our mission is to make healthy living delicious and enjoyable.</h4>
        <h4>💚 We believe that every sip should refresh your mind and body.</h4>
        <h4>🍍 Fresh fruits, vibrant flavors, and delightful taste are our promise.</h4>
        <h4>✨ No compromises on freshness — only goodness in every glass!</h4>
        <h4><i class="fa-solid fa-heart-circle-check"></i> From classic favorites to refreshing fruit blends, we have something for everyone.</h4>
      </div>

      <div className='about-end'>
        <h2>🌱 Your health, happiness, and satisfaction are always our priority.</h2>
        <h1>💛 Fresh Vibes  Sip Fresh, Feel Fresh, Live Fresh! 🍹</h1>
      </div>      
    </div>
  )
}

export default About
