import React from 'react'
import {UilFacebook,UilGithub,UilInstagram} from '@iconscout/react-unicons';
import css from '../styles/Footer.module.css';  
import Image from 'next/image';
import logo from '../assets/logo.png';
const Footer = () => {
  return (
    <div className={css.footer}>
        <span>All Right Reserved</span>
        <div className={css.social}>
            <UilFacebook size={50}/>
            <UilGithub size={50}/>
            <UilInstagram size={50}/>
        </div>
        <div className={css.logo}>
            <Image src={logo} alt="" width={140} height={70}/>
        </div>
    </div>
  )
}

export default Footer