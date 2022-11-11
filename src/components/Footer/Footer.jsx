import React from 'react'
import s from './Footer.module.css'
import shield from '../../image/Shield.png'
import icon from '../../image/icon.png'
import twitter from '../../image/iconTwitter.png'
import instagram from '../../image/iconInstagram.png'
import facebook from '../../image/iconFacebook.png'
import logo from '../../image/pufifooter.png'

export default function Footer() {
    return (
        <footer className={s.footer}>
            <div className={s.containerLogo}>
                <img className={s.logo} src={logo} alt="" />
            </div>
            <div className={s.products}>
                <span><a href="/">PUFI RAIN</a></span>
                <span><a href="/">PUFI PUFF</a></span>
                <span><a href="/">PUFI CART</a></span>
                <span><a href="/">PUFI NAP</a></span>
            </div>
            <div className={s.info}>
                <span><a href="/">CONTANTO</a></span>
                <span><a href="/">AYUDA</a></span>
                <span><a href="/">COMO COMPRAR</a></span>
                <span><a href="/">TERMINOS & CONDICIONES</a></span>
            </div>
            <div className={s.bannerSecurity}>
                <span>COMPRA 100% SEGURA</span>
                <div className={s.itemSecurity}>
                    <img src={icon} alt="" />
                    <div className={s.itemShield}>
                        <img src={shield} alt="" />
                        <span>COMPRA CON<br /> LA GARANTIA<br />DE PUFI</span>
                    </div>
                </div>
            </div>
            <div className={s.redes}>
                <div className={s.itemRedes} >
                    <span>SEGUINOS EN</span>
                    <img src={facebook} alt="Facebook" />
                    <img src={twitter} alt="Twitter" />
                    <img src={instagram} alt="Instagram" />
                </div>
            </div>
        </footer>
    )
}
