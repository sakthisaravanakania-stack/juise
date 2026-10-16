import React from 'react'
import MenuImg from './menu.jpeg'

const Menu = () => {
  return (
    <div className='menu'>
      <div className='menu-contant'>
        <h2>🌿 Freshly Blended Happiness in Every Sip <i class="fa-brands fa-angellist"></i> </h2>
      </div>
      <div className='menu-image'>
        <img src={MenuImg} alt="" />
      </div>
      <div className='manu-main'>
        <h1>🍹 Explore Our Refreshing Juice Collection 🌿</h1>
        <h3>🍊 Orange Juice – Tangy, refreshing, and full of citrus goodness!</h3>
        <h3><i class="fa-solid fa-circle-nodes"></i> Lemon Juice – A zesty sip to refresh your mind and body.</h3>
        <h3>🍇 Grape Juice – Sweet, juicy flavors in every delicious sip.</h3>
        <h3>🍉 Watermelon Juice – Cool, hydrating, and perfect for sunny days.</h3>
        <h3>🍍 Pineapple Juice – A tropical treat with a sweet and tangy twist.</h3>
        <h3><i class="fa-solid fa-burst"></i> Mango Juice – Rich, smooth, and bursting with mango sweetness.</h3>
        <h3>🍎 Apple Juice – Fresh fruity goodness for your everyday refreshment</h3>
        <h3>🍓 Strawberry Juice – A delightful blend of sweetness and freshness.</h3>
        <h3><i class="fa-solid fa-clover"></i> Kiwi Juice – A vibrant, tangy taste packed with fruity flavor.</h3>
        <h3>🍈 Papaya Juice – Smooth, mellow, and naturally delicious</h3>
        <h3>🍹 Mixed Fruit Juice – A colorful combination of nature’s finest fruits.</h3>
        <h3>🌱 Sugarcane Juice – Naturally sweet refreshment in every glass.</h3>
        <h3><i class="fa-brands fa-battle-net"></i> Mosambi Juice – A light, citrusy drink to brighten your day.</h3>
      </div>

      <div className='menu-last'>
        <h1>💚 Freshness in Every Sip! – Choose your favorite, sip happily, and enjoy <br />
          the goodness of fresh fruits!</h1>
      </div>
    </div>
  )
}

export default Menu;
