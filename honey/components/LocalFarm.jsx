import React from 'react'
import css from '../styles/LocalFarm.module.css'
import localFarm1 from '../assets/localFarm1.jpg'
import localFarm2 from '../assets/localFarm2.jpg'
import localFarm3 from '../assets/localFarm3.jpg'
import ex1 from '../assets/ex1.png'

import Image from 'next/image'
const LocalFarm = () => {
  return (
  <div className={css.localFarm}>
    <div className={css.mainHeading}>
        <Image src={ex1} height={141} width={241} alt=""/>
           Our Local <span style={{
        color:'#fd9101'
    }}> Bee Farm</span></div>
    <div className={css.farmCards}>
        
    <div className={css.card1}>
    <div className={css.imageWrapper}>
    <Image src={localFarm1} width={372} height={280} alt="" style={{
        borderRadius:'1rem'
    }} />
    </div>
        <div className={css.cardHeading}>Natural Honey</div>
        <div className={css.cardContent}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius voluptatibus nulla alias qui deserunt magni aut modi, par</div>
    </div>
    <div className={css.card1}>
        <div className={css.imageWrapper}><Image src={localFarm2} width={372} height={280} style={{
        borderRadius:'1rem'
    }} alt=""/></div>
    <div className={css.cardHeading}>Expert Beekeepers</div>
    <div className={css.cardContent}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius voluptatibus nulla alias qui deserunt magni aut modi, par</div>
    </div>
    <div className={css.card1}>
    <div className={css.imageWrapper}>
    <Image src={localFarm3} width={372} height={280} style={{
        borderRadius:'1rem'
    }} alt=""/></div>
    <div className={css.cardHeading}>Organised Apiary</div>
    <div className={css.cardContent}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius voluptatibus nulla alias qui deserunt magni aut modi, par</div>
    </div>
    </div>
    </div>
  )
}

export default LocalFarm