import { Modal, useMantineTheme } from '@mantine/core';
import css from '../styles/OrderModal.module.css';
import React from 'react'
import { useState } from 'react';
import { useStore } from '../store/store';
import { createOrder } from '../lib/orderHandler';
import {useRouter} from 'next/router';
import { toast,Toaster } from 'react-hot-toast';
const OrderModal = ({opened,setOpened,paymentMethod}) => {
  const theme=useMantineTheme();
  const router=useRouter();
  const [FormData, setFormData] = useState({})
    const handleInput=(e)=>{
        setFormData({...FormData,[e.target.name]:e.target.value})
    }
    const total=typeof window !== 'undefined' && localStorage.getItem('total');
    const resetCart=useStore((state)=>state.resetCart)
    const handleSubmit=async(e)=>{
        e.preventDefault();
        console.log(FormData);
        console.log(total);
        console.log(paymentMethod);
        const id=await createOrder({...FormData,total,paymentMethod})
        console.log("id is ",id);
        console.log('order placed',id);
        toast.success('Order placed');
        resetCart();
        {
            typeof window!=='undefined'&& localStorage.setItem('order',id)  
        }
        router.push(`/order/${id}`)

    }
    
    
  return (
        <Modal
        overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
        overlayOpacity={0.55}
        overlayBlur={3}
        opened={opened}
        onClose={()=>setOpened(null)}>
            <form onSubmit={handleSubmit} className={css.formContainer}>
                <input onChange={handleInput} type="text" name='name' required placeholder='Name'/>
                <input onChange={handleInput} type="text" name='phone' required placeholder='Phone Number' />
                <textarea onChange={handleInput} name='address' cols={8} rows={3} placeholder='Address'></textarea>
                <span>You will pay<span>$ {total}</span>on delivery</span>
                <button type='submit' className='btn'>Place Order</button>
            </form>
            <Toaster/>
      </Modal>
        )
}

export default OrderModal