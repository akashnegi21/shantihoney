import React,{useState,useEffect} from 'react'
import css from '../styles/Header.module.css';
import logo from '../assets/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { useStore } from '../store/store';
import {UilHeart,UilSearch,UilShoppingBag,UilReceipt} from '@iconscout/react-unicons'
const Header = () => {
    
    const [Order,setOrder]=useState("")
    useEffect(()=>{
        setOrder(localStorage.getItem('order'))
    },[])
    const items=useStore((state)=>state.cart.honeys.length);
    // console.log(length)
  return (
    <div className={css.header}>
        {/* logo side */}
        <div className={css.logo}>
        <Image src={logo} width={140} height={70} alt=""/>
        <span>HW</span>
        </div>
        {/* menu side */}
            <ul className={css.menu}>
         <li style={{
                    color:'#c64619'
                }}><Link href="/" >Home</Link></li>
             <li><Link href="/MenuPage" >Shops</Link></li>
                <li>Pages</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
                {/* cart side */}
                <div className={css.cartSide}>
                    <div className={css.love}>
                    <div className={css.badgeLove}>1</div>
                    <UilHeart size={35}/>
                    </div>
                    <div className={css.search}>
                    <UilSearch size={35}/>
                    </div>
                    <Link href='../cart'>
                    <div className={css.cart}>
                    <UilShoppingBag size={35}/>
                    <div className={css.badgeCart}>{items}</div></div></Link>
                    {
                Order && (
                    <Link href={`/order/${Order}`}>
                        <div className={css.cart}>
                            <UilReceipt size={35} color='#2E2E2E'/>
                            {Order != "" &&<div className={css.badge}>1</div>
                            }
                        </div>
                    </Link>
                )
            }
                    </div> 
                    

        </div>
    
  )
}

export default Header
