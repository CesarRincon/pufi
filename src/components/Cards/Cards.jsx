import React from 'react'
import s from './Cards.module.css'
import rain from '../../image/Rain.webp'
import puff from '../../image/Puff.webp'
import cart from '../../image/puficartdesc.jpg'
import nap from '../../image/pufinapdesc.jpg'


export default function Cards() {
    return (
        <div className={s.containerCards}>
            <div className={s.itemCard}>
                <div className={s.imageCard} id={s.imageCardOne}>
                    <button>SHOP</button>
                </div>
                <div className={s.descriptionCard}>
                    <img src={rain} alt="rain" />
                    <h2>Pufi RAIN</h2>
                    <span>______</span>
                    <span>Descripción del producto. Este es un texto simulado</span>
                    <a href="">{"> Ver más"}</a>
                </div>
            </div>
            <div className={s.itemCard} id={s.cardTwo}>
                <div className={s.imageCard} id={s.imageCardTwo}>
                </div>
                <div className={s.descriptionCard}>
                    <img src={puff} alt="rain" />
                    <h2>Pufi PUFF</h2>
                    <span>______</span>
                    <span>Descripción del producto. Este es un texto simulado</span>
                    <a href="">{"> Ver más"}</a>
                </div>
            </div>
            <div className={s.itemCard}>
                <div className={s.imageCard} id={s.imageCardThree}>
                </div>
                <div className={s.descriptionCard}>
                    <img src={cart} alt="rain" />
                    <h2>Pufi CART</h2>
                    <span>______</span>
                    <span>Descripción del producto. Este es un texto simulado</span>
                    <a href="">{"> Ver más"}</a>
                </div>
            </div>
            <div className={s.itemCard} id={s.cardTwo}>
                <div className={s.imageCard} id={s.imageCardFour}>
                </div>
                <div className={s.descriptionCard}>
                    <img src={nap} alt="rain" />
                    <h2>Pufi NAP</h2>
                    <span>______</span>
                    <span>Descripción del producto. Este es un texto simulado</span>
                    <a href="">{"> Más info"}</a>
                </div>
            </div>
        </div>
    )
}
