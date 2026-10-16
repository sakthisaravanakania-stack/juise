import React from 'react'
import ReviewImg from './review.jpeg'
const Review = () => {
  return (
    <div className='review'>
      <div className='review-content'>
        <h1>🍹 Every sip is filled with freshness, flavor, and happiness! 🍓✨</h1>
        <h2>🌿 Made with love, served fresh, and crafted just for you! 💚</h2>
      </div>

      <div className='review-image'>
        <img src={ReviewImg} alt="" />
        <h1>💖 Your smiles and sweet reviews inspire us to serve you better every day! 🍊</h1>
      </div>
      
    </div>
  )
}

export default Review
