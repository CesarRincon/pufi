import React from 'react'
import s from './Carrusel.module.css'

export default function () {
    return (
        <div className={s.containerCarrusel}>
            <div className={s.items} id={s.itemOne}>
                <h1>ESTAR COMODO <br /> NUNCA FUE TAN FÁCIL</h1>
                <button>SHOP</button>
            </div>
            <div className={s.items} id={s.itemTwo}>
                <button>SHOP</button>
            </div>
            <div className={s.items} id={s.itemThree}>
                <button>SHOP</button>
            </div>
            <div className={s.containerButtoms}>
                <a href={"#itemTwo"}>◉</a>
                <a href={"#itemOne"}>◉</a>
                <a href={"#itemThree"}>◉</a>
            </div>

        </div>
    )
}
