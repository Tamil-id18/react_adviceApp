import {useState} from 'react';

const Cart = () => {
   const [cartCount ,setCartCount] = useState(0)
   const handleClick = ()=>{
    setCartCount(cartCount + 5)
   }
  return (
    <>
     <h1>Plaease add cart : {cartCount}</h1>
     <button onClick={handleClick}>Add cart</button>
    </>
  );
}

export default Cart;
