import React from 'react'

function Cart({cartItems, onRemoveFromCart}) {
  return (
    <div>
      <h2>Cart</h2>
      {cartItems.map(item => (
        <div key={item.id}>
          <h4>{item.name}</h4>
          <button onClick={() => onRemoveFromCart(item)}>Remove From Cart</button>
        </div>
      ))}
      
    </div>
  )
}

export default Cart