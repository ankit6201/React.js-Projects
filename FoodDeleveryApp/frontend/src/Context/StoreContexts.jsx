import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContexts = createContext(null)

const StoreContextsProvider = (props)=>{

const [cartItems,setCartitems] = useState({});

const addToCart = (itemId) =>{
    if(!cartItems[itemId]){
        setCartitems((prev)=>({...prev,[itemId]:1}))
    }
    else{
        setCartitems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
}

const removeFromCart = (itemId)=>{
    setCartitems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
}

useEffect(()=>{
console.log(cartItems);

},[cartItems])

    const contextValue = {
       food_list,
       cartItems,
       setCartitems,
       addToCart,
       removeFromCart
    }
    return(
        <StoreContexts.Provider value={contextValue}>
            {props.children}
        </StoreContexts.Provider>
    )
}

export default StoreContextsProvider
