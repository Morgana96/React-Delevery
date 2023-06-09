import { useState } from "react";

import Header from "./components/layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from './components/Cart/cart'

function App() {

  const [cartIsShown, setCartIsShow] = useState(false)

  return (
    <div>
      {cartIsShown && <Cart></Cart>}
      <Header/>
      <main>
        <Meals></Meals>
      </main>
    </div>
  );
}

export default App;
