  import React from 'react';
import { useCartStore } from '../store/cartStore';

const dummyProducts = [
  { id: 1, name: 'Laptop', price: 1000 },
  { id: 2, name: 'Phone', price: 500 },
  { id: 3, name: 'Headphones', price: 150 },
];


const ProductList:React.FC = () => {
  const addToCart=useCartStore((state)=>state.addToCart)
  return (
    <div>
      <h2>Products</h2>
      {dummyProducts.map ((product)=>(
         <div key={product.id} style={{ marginBottom: '10px' }}>
          <span>{product.name} - ₹{product.price}</span>
             <button onClick={() => addToCart(product)} style={{ marginLeft: '10px' }}>
            Add to Cart
          </button>


        </div>
      ))}
    </div>
  )
}

export default ProductList
