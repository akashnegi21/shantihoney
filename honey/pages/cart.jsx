import Layout from "../components/Layout";
import css from '../styles/Cart.module.css';
import { useStore } from "../store/store";
import Image from "next/image";
import { urlFor } from "../lib/client";
import { toast,Toaster } from "react-hot-toast";
import { useState } from "react";
import { useRouter } from "next/router";
import OrderModal from "../components/OrderModal";
export default function Cart(){
    const [order,setOrder]=useState(
        typeof window!=='undefined' && localStorage.getItem('order')
    )
const router=useRouter(); 
    const cartData=useStore((state)=>state.cart)
        const removeHoney=useStore((state)=>state.removeHoney);
        const [paymentMethod,setPaymentMethod]=useState(null)
    const handleRemove=(i)=>{
        removeHoney(i);
        toast.error('Honey Removed')
    }
    function total(){
        return  cartData.honeys.reduce((a,b)=>a+b.quantity*b.price,0)
    }
    function handleOnDelivery(){
        setPaymentMethod(0);
        typeof window!=='undefined' && localStorage.setItem('total',total());
    }
    const handleCheckout=async ()=>{

        typeof window!=='undefined' && localStorage.setItem('total',total());
        setPaymentMethod(1);
        const response=await fetch('api/stripe',{
            method:"POST",
            headers:{
                'Content-Type':"application/json"
            },
            body:JSON.stringify(cartData.honeys)
        });
        if(response.status===500) return;
        const data=await response.json();
        toast.loading("Redirecting...")
        router.push(data.url)

    }
    return(
        <Layout>
            <div className={css.cartContainer}>
                <div className={css.cartHeading}><span>Your Cart</span></div>
                    <table className={css.table}>
                        <thead className={css.thead}>
                            <th></th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Size</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th> </th>
                        </thead>
                        <tbody className={css.tbody}>
                        {cartData.honeys.length>0 && 
                        cartData.honeys.map((honey,i)=>{
                        const src=urlFor(honey.image).url();
                        return(    
                        <tr key={i}>
                            <td className={css.cartImage}>
                                <Image  loader={()=>src} src={src} width={155} height={155}/>
                                </td>
                                <td>
                                    {honey.name}
                                </td>
                                <td>{
                                    honey.size===0? "250 gm":
                                    honey.size===1? "500 gm":
                                    "1 kg"}
                                </td>
                            <td>
                            <span style={{
                                color:'#f8af4a',
                                fontWeight:'600'
                                }}>
                                {honey.price}
                            </span>
                            </td>
                            <td><span style={{
                                border:'2px solid grey',
                                borderRadius:'1rem',
                                paddingLeft:'.5rem',
                                paddingRight:'.5rem'
                            }}>
                                {honey.quantity}
                            </span>
                            </td>
                            <td><span style={{
                                color:'#f8af4a',
                                fontWeight:'600'
                                }}>
                                Rs. {honey.price*honey.quantity}
                            </span>
                            </td>
                                    <td
                                    style={{
                                        color:'red',
                                        cursor:'pointer'
                                    }}
                                    onClick={()=>handleRemove(i)}>x</td>
                            </tr>

                        )
                        })}
                        
                        </tbody>
                    </table>
                </div>
                {/* summary */}

                <div className={css.cartt}>
                <span className={css.cartTotal}>Cart Total</span>
                        
                <div className={css.summaryCart}>
                    
                    <div className={css.cartDetails}>
                        <div>
                            <span>Items</span>
                            <span>{cartData.honeys.length}</span>
                        </div>
                        <div>
                            <span>Total</span>
                        <span>Rs. {total()}</span>
                        </div>
                    </div>

{!order &&cartData.honeys.length>0 ? (
     <div className={css.buttons}>

     <button className={css.btn} onClick={handleOnDelivery}>Pay On Delivery
         </button>
         <button className={css.btn} onClick={handleCheckout}>Pay Now</button>
         </div>

 ):null
}

                
            </div>
            </div>
            <Toaster/>
            {/* modal */}
            <OrderModal
    opened={paymentMethod===0}
    setOpened={setPaymentMethod}
    paymentMethod={paymentMethod}
    />
        </Layout>
    )
}