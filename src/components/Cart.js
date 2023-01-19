import Productincart from "./Productincart"

function Cart({cart, onDelete}) {
  return (
    <div>
        {cart.map(productincart => <Productincart key={productincart.id} productincart={productincart} onDelete={onDelete}/>)}
    </div>
  )
}

export default Cart