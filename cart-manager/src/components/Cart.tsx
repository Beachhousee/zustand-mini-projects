import React from 'react';
import { useCartStore } from '../store/cartStore';

const Cart: React.FC = () => {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);
  const totalItems = useCartStore((state) => state.totalItems());

  return (
    <div>
      <h2>Cart ({totalItems} items)</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id}>
              {item.name} × {item.quantity}
              <button onClick={() => removeFromCart(item.id)} style={{ marginLeft: '10px' }}>
                Remove
              </button>
            </div>
          ))}
          <button onClick={clearCart} style={{ marginTop: '10px' }}>
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
