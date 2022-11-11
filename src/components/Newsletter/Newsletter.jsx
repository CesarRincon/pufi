import React, { useState } from 'react'
import s from './Newsletter.module.css'
import subscribe from '../../redux/action';
import { useDispatch } from "react-redux";
import arrow from '../../image/iconArrow.png'
import image1 from '../../image/pufinap.jpg'
import image2 from '../../image/2.jpeg'
import image3 from '../../image/4.jpg'
import image4 from '../../image/pufiCart.webp'
import image5 from '../../image/5.webp'
import image6 from '../../image/pufi-puff.webp'
import { regex } from '../../utils/utils';

export default function Newsletter() {

    const dispatch = useDispatch();

    const [email, setEmail] = useState("")
    const [error, setError] = useState(" ")

    const handleChange = (e) => {
        setEmail(e.target.value.toLowerCase())
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email.match(regex)) {
            setError('Invalid email try again!')
        } else {
            dispatch(subscribe(email))
            setError(" ")
            setEmail(" ")
            alert('Successfully subscribed')
        }

    }


    return (
        <div className={s.containerNewsletter}>
            <span className={s.subtitle}>INTAGRAM</span>
            <h3>#ESPUFI</h3>
            <div className={s.collage}>
                <img src={image3} alt="products" />
                <img src={image5} alt="products" />
                <img src={image1} alt="products" />
                <img src={image6} alt="products" />
                <img src={image4} alt="products" />
                <img src={image2} alt="products" />
            </div>
            <div className={s.newsletter}>
                <span className={s.subtitle}>NEWSLETTER</span>
                <h3>SUSCRIBETE</h3>
                <span className={s.minidescription}>y enterate de todas las novedades</span>
                <form action="" id='form' className={s.form} onSubmit={(e) => handleSubmit(e)}>
                    <input type="email" name='email' value={email} placeholder='Ingresa tu email' onChange={handleChange} />
                    <button type='submit'>
                        <img src={arrow} alt="Buscar" />
                    </button>
                </form>
                {error.length && <span style={{color: "red"}}>{error}</span>}
            </div>
        </div>
    )
}
