import classes from './MealItem.module.css'
import MealitemForm from './MealitamForm'
import CartContext from '../../../store/cart-context'
import { useContext } from 'react'

const Mealitem = props => {

    const cartCtx = useContext(CartContext)
    const price = `$${props.price.toFixed(2)}`

    const addToCartHandler = amount =>{
        cartCtx.addItem ({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        })
    }

    return <li className={classes.meal}>
        <div>
            <h3>{props.name}</h3>
            <div className={classes.description} >{props.description}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <div>
            <MealitemForm id = {props.id} onAddToCart = {addToCartHandler}></MealitemForm>
        </div>
    </li>
}

export default Mealitem