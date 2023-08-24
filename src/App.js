import { useState } from "react";

import Header from "./components/layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from './components/Cart/Cart'
import CartProvider from "./store/CartProvider";

function App() {

  const [cartIsShown, setCartIsShow] = useState(false)

  const showCartHandler = () =>{
    setCartIsShow(true)
  }

  const hideCartHandler = () =>{
    setCartIsShow(false)
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart hideCart = {hideCartHandler}></Cart>}
      <Header onshowCart={showCartHandler}/>
      <main>
        <Meals></Meals>
      </main>
    </CartProvider>
  );
}

export default App;
