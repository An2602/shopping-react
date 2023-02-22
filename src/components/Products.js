import Product from "./Product"

function Products({product,cart}) {
  const cardListStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridGap: '0.1rem',
    width:'100%',
};
  return (
    <div style={cardListStyle}>
    {product.map(product => <Product key={product.id} product={product} cart={cart}/>)}
 

    </div>
  )
}

export default Products