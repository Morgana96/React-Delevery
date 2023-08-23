import { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
    item:[],
    totalAmount: 0,
}

const cartReducer = (state, action) =>{
    console.log(state);
    if(action.type === "ADD_CART"){
        const uldateTotalAmount = state.totalAmount + action.item.price * action.item.amount

        const existingCartItemIndex = state.item.findIndex(
            (item) => item.id === action.item.id
        )
        console.log(existingCartItemIndex);

        const updateItems = state.item.concat(action.item)
        //concart will not update an array but a new array
        
        return {
            item: updateItems,
            totalAmount: uldateTotalAmount
        }
    }

    if(action.type === "REMOVE_CART"){

    }

    return defaultCartState
}

const CartProvider = props =>{

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)


    const addItemToCartHandler = (item) =>{
        dispatchCartAction({type:'ADD_CART',item: item})
    }

    const removeItemToCartHandler =(id) =>{
        dispatchCartAction({typr:"REMOVE_CART", id:id})
    }

    const cartContext ={
        item: cartState.item,
        totalAmount: cartState.totalAmount,
        addItem : addItemToCartHandler,
        removeItem : removeItemToCartHandler
    }

    return <CartContext.Provider value={cartContext}>
       { props.children}
    </CartContext.Provider>
}

export default CartProvider