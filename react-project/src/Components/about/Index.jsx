import React from 'react'
import img from './farh1.png'
import './About.css'
export const Index = ({ name, age }) => {
    return (
        <div className='about-us'>
            <h2>A propos de nous</h2>
            <p>Bienvenu {name} agé de {age} sur notre site web</p>
            <img src={img} alt='img' width={200} />
        </div>
    )
}
