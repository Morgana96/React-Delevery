import { useContext } from 'react'
import CartContext from '../../store/cart-context'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import CartItem from './cartItem'

const Cart = props =>{

    const cartCtx = useContext(CartContext)

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
    console.log(totalAmount);

    const hasItem = cartCtx.item.length >0
    
    const onRemoveHandler = (id) =>{
        cartCtx.removeItem(id)
    }

    const onAddHandler = (item) =>{
        cartCtx.addItem({item, amount: 1})
        console.log(item);
    }

    const cartItems = 
    <ul className={classes['cart-items']}>
        { cartCtx.item.map((item) => (
            <CartItem 
                key={item.id} 
                name = {item.name} 
                amount = {item.amount} 
                price = {item.price} 
                onRemove = {onRemoveHandler.bind(null, item.id)} 
                onAdd = {onAddHandler.bind(null, item)}>     
            </CartItem>))}
    </ul>

    return (
    <Modal hideCart={props.hideCart}>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
            <button onClick={props.hideCart} className={classes['button--alt']}>Close</button>
            {hasItem && <button className={classes.button}>Order</button>}
        </div>
    </Modal>
    )
}

export default Cart