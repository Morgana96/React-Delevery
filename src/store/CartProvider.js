import { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
    item:[],
    totalAmount: 0,
}

const cartReducer = (state, action) =>{

    if(action.type === "ADD_CART"){
        //先计算totalAmount 总是没有错的
        const updateTotalAmount = state.totalAmount + action.item.price * action.item.amount

        const existingCartItemIndex = state.item.findIndex(
            (item) => item.id === action.item.id
        )//输出的的是符合条件对象的索引
        const existingCartItem = state.item[existingCartItemIndex]
        
        let updatedCartItems

        if(existingCartItem){
            let updatedCart
            updatedCart = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            }
            updatedCartItems = [...state.item]
            updatedCartItems[existingCartItemIndex] = updatedCart
            
        }else{
            updatedCartItems = state.item.concat(action.item)
            console.log(updatedCartItems);
            console.log(updateTotalAmount);
            //合并数组 concart will not update an array but a new array
        }
        
        return {
            item: updatedCartItems,
            totalAmount: updateTotalAmount
        }
    }

    if(action.type === "REMOVE_CART"){
        console.log('111');
        const existingCartItemIndex = state.item.findIndex(
            (item) => item.id === action.id
        )
        const existingCartItem = state.item[existingCartItemIndex]
        const updateTotalAmount = state.totalAmount - existingCartItem.price
        console.log(updateTotalAmount);
        
        let updatedItems
        console.log(updatedItems);
        if(existingCartItem.amount === 1){
            updatedItems = state.item.filter(item => item.id !==action.id)
            console.log(updatedItems);
        }else{
            const updatedItem = {...existingCartItem, amount: existingCartItem.amount - 1}
            updatedItems = [...state.item]
            updatedItems[existingCartItemIndex] = updatedItem
            console.log(updatedItems);
        }

        return{
            item: updatedItems,
            totalAmount: updateTotalAmount
        }
    }

    return defaultCartState
}

const CartProvider = props =>{

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)


    const addItemToCartHandler = (item) =>{
        dispatchCartAction({type:'ADD_CART',item: item})
    }

    const removeItemToCartHandler =(id) =>{
        dispatchCartAction({type:"REMOVE_CART", id:id})
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