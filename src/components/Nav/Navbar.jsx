import React from 'react'
import s from './Navbar.module.css'
import logo from '../../image/pufinavbar.png'
import rain from '../../image/umbrella.png'
import puff from '../../image/puff.png'
import bag from '../../image/bag.png'
import nap from '../../image/nappuffi.png'

export default function Navbar() {
  return (
    <nav className={s.navbar}>
      <img src={logo} alt="" />
      <div className={s.containerIcons}>
        <div className={s.itemIconOnly}>
          <img src={puff} alt="puff" />
          <span>PUFI PUFF</span> 
        </div>
    
        <div className={s.itemIcon}>
          <img src={rain} alt="" />
          <span>PUFI RAIN</span> 
        </div>
      
        <div className={s.itemIcon}>
          <img src={bag} alt="" />
          <span>PUFI CART</span> 
        </div>

        <div className={s.itemIcon}>
          <img src={nap} alt="" />
          <span>PUFI NAP</span> 
        </div>
      </div>
      <ul>
        <li>Mi cuenta</li>
        <li>|</li>
        <li>Mi compra</li>
      </ul>
    </nav>
  )
}
