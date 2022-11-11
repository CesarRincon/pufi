import React from 'react'
import Cards from '../../components/Cards/Cards'
import Carrusel from '../../components/Carrusel/Carrusel'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Nav/Navbar'
import Newsletter from '../../components/Newsletter/Newsletter'
import s from './Landing.module.css'

export default function Landing() {
  return (
    <div className={s.landing}>
      <Navbar />
      <Carrusel />
      <Cards />
      <Newsletter />
      <Footer />
    </div>
  )
}
