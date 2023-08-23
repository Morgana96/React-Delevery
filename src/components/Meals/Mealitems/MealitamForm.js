import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'
import { useRef, useState } from 'react'

const MealitemForm = props => {

    const [amountIsValid, setAmountIsValid] = useState(true)

    const amountInputRef = useRef()
    
    const submitHandler = e => {

        e.preventDefault();  
        const enterAmount = amountInputRef.current.value
        //const value = amountInputRef.current.value; // 获取输入框的值
        //amountInputRef.current.focus(); // 将焦点设置在输入框上
        const enterAmountNum = +enterAmount

        if(enterAmount.trim().length === 0 || enterAmountNum <=0 ){
           setAmountIsValid(false)
           return 
        }
        
        props.onAddToCart(enterAmountNum)

    }

    return <form className={classes.form} onSubmit = {submitHandler}>
       <Input 
            ref = {amountInputRef}
            label = 'Amount' 
            input={{
                id:'amount',
                type:'number', // input will always be a string even if the type is number
                min:'1',
                max:'5',
                step:'1',
                defaultValue:'1',
            }}
       />

        <button>Add</button>
        {!amountIsValid && <p>Please enter a valid amount</p>}
    </form>
}

export default MealitemForm