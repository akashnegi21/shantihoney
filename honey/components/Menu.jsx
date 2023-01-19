import React from 'react'
import { urlFor } from '../lib/client';
import css from '../styles/Menu.module.css';
import Image from 'next/image';
import Link from 'next/link';
const Menu = ({honeys}) => {
    console.log(honeys)
    return (
    <div className={css.menuContainer}>
        <div className={css.heading}>
        <span>Make You Feel in Love</span>
        <span>Kinds of organic honey</span>    
        </div>
        <div className={css.menu}>
        {/* honeys */}
        {honeys.map((honey,id)=>{
            const src=urlFor(honey.image).url()
            return(
                <div className={css.honey} key={id}>
                   <Link href={`./honeyProduct/${honey.slug.current}`}>
                    <div className={css.imageWrapper}>
                        <Image loader={()=>src}
                        src={src} width={330} height={430}
                        alt=""/>
                    </div>
                    </Link>
                    <span className={css.honeyHeading}>{honey.name}</span>
                    <span>{honey.price[1]}<span style={{
                        color:'#c64619'
                    }}> Rs</span></span>
                    </div> )
                    
        })}
        </div>
    </div>
  )
  
}

export default Menu