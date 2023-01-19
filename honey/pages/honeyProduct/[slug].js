import React, { useState } from 'react'
import Layout from '../../components/Layout';
import Client, { urlFor } from '../../lib/client';
import css from '../../styles/Honey.module.css';
import RightArrow from "../../assets/arrowRight.png";
import LeftArrow from "../../assets/arrowLeft.png";
import Image from 'next/image'
import { useStore } from '../../store/store';
import toast,{Toaster} from 'react-hot-toast';
export default function Honey({honey}) {
function handleQuan(val){
  if(val=='inc'){
    setQuantity(quantity+1)
  }
  else if(val=='dec'){
    if(quantity>1){
        setQuantity(quantity-1)
    }
  }
}
  const [quantity,setQuantity]=useState(1)
  const [size,setSize]=useState(1)
    const src=urlFor(honey.image).url();

//add to cart function
const addHoney=useStore((state)=>state.addHoney);
const addToCart=()=>{
  addHoney({...honey,price:honey.price[size],quantity:quantity,size:size});
  toast.success('Your Honey Is Added To Cart');
}
    return (
    <Layout>

    <div className={css.honey}>
      <div className={css.imageWrapper}>
        <Image src={src} loader={()=>src} 
        height={530} width={410} alt=""/>
      </div>

    {/* right side */}
    <div className={css.rightSide}>
      <span className={css.honeyHeading}>{honey.name}</span>
      <span className={css.honeyDetails}>{honey.details}</span>
      <span className={css.honeyPrice}> <span style={{
         textDecoration: 'line-through',
         fontSize:'1.4rem',
         fontWeight:'600',
         color:'grey'
      }}>Rs{honey.price[size]+60}</span> Rs {honey.price[size]}</span>
  <div className={css.side}>
    <div className={css.size}>
    <span>Size</span></div>
    <div className={css.sizeVarient}>
      <div 
      onClick={()=>setSize(0)}
      className={size==0? css.selected:""}
      >250 gm</div>
      <div 
            onClick={()=>setSize(1)}
            className={size==1? css.selected:""}
      >500 gm</div>
      <div
            onClick={()=>setSize(2)}
            className={size==2? css.selected:""}
      >1 Kg</div>
    </div>
  </div>

{/* Quantity counter */}
<div className={css.quantity}>
            <span>Quantity</span>
            <div className={css.counter}>
              <Image
                src={LeftArrow}
                width={20}
                height={20}
                onClick={()=>handleQuan('dec')}
              />
              <span>{quantity}</span>
              <Image
                src={RightArrow}
                width={20}
                height={20}
                onClick={()=>handleQuan('inc')}
              />
            </div>
          </div>
      
          {/* button */}
            <div className={css.btn} onClick={addToCart}>
                Add To Cart
            </div>
                
</div>
</div>
<Toaster/>
    </Layout>
  )
};
export async function getStaticPaths(){
const paths=await Client.fetch(`*[_type=='honey'].slug.current`);
return{
    paths:paths.map((slug)=>({params:{slug}})),
    fallback:'blocking'
}
}
export async function getStaticProps(context) {
        const {slug=""}=context.params;
        const honey=await Client.fetch(
            `*[_type=="honey" && slug.current=='${slug}'][0]`);
    return {
      props: {
        honey
      },
    };
  }