import {create} from 'zustand'
export const useStore = create(
    (set) => ({
        //cart
        cart:{
            honeys:[]
        },
          //add honey in cart
            addHoney:(data)=>
                set((state)=>({
                    cart:{
                        honeys:[...state.cart.honeys,data]
                    }}
                )),
                removeHoney:(index)=>{
                    set((state)=>({
                    cart:{
                        honeys:state.cart.honeys.filter((_,i)=>i!=index)
                    }
                }))
            },
            resetCart:()=>
            set(()=>({
        cart: {
            honeys:[]
        }
    }))
        
    })
    
)