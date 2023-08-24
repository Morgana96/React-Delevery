import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';
import { useContext, useEffect, useState } from 'react';

const HeaderCartButton = (props) => {
  const [btnIsHighLighted, setbtnIsHighLighted]=useState(false)

  const cartCtx = useContext(CartContext)

  const numOfCartItem = cartCtx.item.reduce((accumulator,currentValue)=>{
    return accumulator + currentValue.amount
  }, 0)

  const {item} = cartCtx

  const btnClasses = `${classes.button} ${btnIsHighLighted? classes.bump: ''}`

  useEffect (()=>{
    if(item.length === 0){
      return
    }
    setbtnIsHighLighted(true)

    const timer = setTimeout(()=>{setbtnIsHighLighted(false)},300)
    return ()=>{
      clearTimeout(timer)
    }

  }, [item])

  return (
    <button onClick={props.onClick} className={btnClasses}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numOfCartItem}</span>
    </button>
  );
};

export default HeaderCartButton;