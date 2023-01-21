import React from 'react'
import css from '../styles/Services.module.css'
import service1 from '../assets/service1.png'
import service2 from '../assets/service2.png'
import service3 from '../assets/service3.png'
import Image from 'next/image'
const Services = () => {
  return (
    <div className={css.services}>
        <div className={css.serviceHeading1}>
          
        <span>Our Processing Model</span>
        </div>
        <div className={css.serviceHeading2}>
            <span>High quality & organic products</span>
        </div>
        <div className={css.servicesTypes}>
        <div className={css.serviceCard}>
                <Image src={service1} width={98} height={94} alt=""/>
                <span>Pure Honey</span>
                <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate totam p rspiciatis rerum rem nesciunt! Corpori</span>
            </div>
            <div className={css.serviceCard}>
                <Image src={service2} width={97} height={94} alt=""/>
                <span>Pure Honey</span>
                <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate totam perspiciatis rerum rem nesciunt! Corpori</span>
            </div>
            <div className={css.serviceCard}>
                <Image src={service3} width={99} height={94} alt=""/>
                <span>Pure Honey</span>
                <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit.dsfds Cupiditate totam perspiciatis rerum rem nesciunt! Corpori</span>
            </div>
        </div>
    </div>
  )
}

export default Services
