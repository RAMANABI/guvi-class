import { useState } from 'react';
import './App.css'
import Items from './Items';
import Cart from './Cart';

function App() {
   const [foodItems] = useState([
    {id:1,foodname:"Chicken Briyani", cost:150},
    {id:2,foodname:"Mutton Briyani", cost:250},
    {id:3,foodname:"KFC CHICKEN", cost:200},
    {id:4,foodname:"Chicken fried rice", cost:100}
   ]);

   const [cart, setCart] =useState([]);
     
   const onAddCart = (items) => {
    setCart([...cart, items]);
   }

   const removeFromCart = (itemsToRemove) => {
    setCart(cart.filter(items => items !== itemsToRemove));
   }


  
  return (
   <div>
    <h1>FoodItems</h1>
    {foodItems.map(items => (      
      <Items key={items.id} items={items} onAddCart={addToCart} onRemoveCart={removeFromCart} 
      isInCart={cart.includes(items)}/>
    ))}
    <Cart cartItems={cart} onRemoveFromCart={removeFromCart}/>
   </div>
   )
}

export default App
