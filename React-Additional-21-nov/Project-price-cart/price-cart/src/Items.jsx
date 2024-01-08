import React from 'react'

function Items(props) {
  return (
    <div>
      <h3>{props.Items.foodname}</h3>
      <h3>{props.Items.cost}</h3>
      {props.isInCart ?  (
        <button onClick={() => props.onAddCart(props.Items)}>Add to Cart</button> ):(
            <button onClick={() => props.onRemoveCart(props.Items)}>Remove From Cart</button>
        )
      }
    </div>
  )
}

export default Items