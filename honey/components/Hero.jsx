import React from 'react'
import css from '../styles/Hero.module.css'
const Hero = () => {
  return (
    <div className={css.hero}>
        <div className={css.left}>
        <span>100% Pure and Organic Honey</span>
        <span>HONEY'S</span>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe accusamus magni culpa alias tenetur, eligendi sint eos quod dolorem perferendis at, soluta dolor quae labore eveniet deleniti. Culpa, hic expedita!</span>
       <div className={css.btnContainer}>
        <button className={css.btn}>Shop Now</button>
        </div>
        </div>
        <div className={css.right}>
        </div>
    </div>
  )
}

export default Hero