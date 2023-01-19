import Product from "./Product"

function Products({products}) {
  return (
    <div>
        {products.map(product => <Product key={product.id} product={product}/>)}
        
    </div>
  )
}

export default Products