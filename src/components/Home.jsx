import React from 'react'
import HeaderImg from './header.jpeg'
import AppleImg from './apple.jpeg'
import WaterImg from './water.jpeg'
import OrangeImg from './orange.jpeg'
import PapayaImg from './papaya.jpeg'
import GrapesImg from './grapes.jpeg'
import PomegranateImg from './pomegranate.jpeg'
import IceImg from './ice.jpeg'
import SugarImg from './sugar.jpeg'
import LeamonImg from './Leamon.jpeg'
const Home = () => {
  return (
    <div className='header'>
      <div className='header-img'>
        <img src={HeaderImg} alt="" />
      </div>

      <div className='header-content'>
        <h1>🍹Why Choose Fresh Vibes?</h1>
        <h2><i class="fa-solid fa-fire"></i>Freshness You Can Taste, Happiness You Can Feel! 🌿<i class="fa-solid fa-champagne-glasses"></i></h2>
        <h3><i class="fa-solid fa-feather-pointed"></i> Enjoy the natural goodness of freshly blended juices made with handpicked fruits.<i class="fa-brands fa-apple"></i> <br />
          Every sip brings you freshness, flavor, and healthy vibes!<i class="fa-solid fa-apple-whole"></i></h3>
      </div>

      <div className='fruit'>
        <h2>🍊 100% Fresh Fruits.Made with fresh and juicy fruits<i class="fa-solid fa-martini-glass"></i></h2>
        <h3><i class="fa-solid fa-spray-can-sparkles"></i> Freshly Blended Prepared fresh for every order.</h3>
        <h4>🌿 No Added PreservativesPure fruit goodness in every sip.</h4>
      </div>
      <div className='taste'>
        <h2>⚡ Taste the Energy
          A refreshing boost to brighten your day!<i class="fa-solid fa-seedling"></i></h2>
        <h4>✨ Sip Fresh. Feel Fresh. Live Fresh! 💚</h4>
      </div>

      <div className='header-content'>
        <p>🍓 Refresh your day with the goodness of fresh fruits and natural flavors <i class="fa-brands fa-untappd"></i></p>
        <h4><i class="fa-brands fa-pied-piper-hat"></i> Every sip brings you freshness, happiness, and a healthy lifestyle! 🍹💚</h4>
      </div> 
      <div className='Images'>
        <img src={AppleImg} alt="" />
        <img src={WaterImg} alt="" />
        <img src={OrangeImg} alt="" />
        <img src={PapayaImg} alt="" />
        <img src={GrapesImg} alt="" />
        <img src={PomegranateImg} alt="" />
        <img src={SugarImg} alt="" />

        <img src={IceImg} alt="" />
        <img src={LeamonImg} alt="" />
      </div>
    </div>
  )
}

export default Home
