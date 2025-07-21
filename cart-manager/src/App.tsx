import React from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const App: React.FC = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Zustand Cart Manager 🛒</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '40px' }}>
        <ProductList />
        <Cart />
      </div>
    </div>
  );
};

export default App;
