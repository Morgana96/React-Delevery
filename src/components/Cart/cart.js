import classes from './Cart.module.css'
import Modal from '../UI/Modal'

const Cart = props =>{
    const cartItems = 
    <ul className={classes['cart-items']}>
        { 
            [{
                id:'c1',
                name:'Sushi',
                amount:2,
                price: 99
            }].map((item) => <li key={item.id}>{item.name}</li>)}
    </ul>

    return (
    <Modal hideCart={props.hideCart}>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>53.56</span>
        </div>

        <div className={classes.actions}>
            <button onClick={props.hideCart} className={classes['button--alt']}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
    </Modal>
    )
}

export default Cart