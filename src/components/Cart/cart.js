import classes from './Cart.module.css'
import Modal from '../UI/modal'

const Items = [
    {
        id:'c1',
        name:'Sushi',
        amount:2,
        price: 99
    }
]
const Cart = props =>{
    const cartItems = <ul className={classes['cart-items']}>{Items.map(item => <li>{item.name}</li>)}</ul>

    return (
    <Modal>
        <cartItems></cartItems>
        <div className='classes.total'>
            <span>Total Amount</span>
            <span>53.56</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']}></button>
            <button className={classes.button}>Order</button>
        </div>
    </Modal>
    )
}

export default Cart