import React from 'react';
import { useState } from 'react';

const products = [
  { id: 1, name: 'Modern Ecommerce Platform Design', price: 100 },
  { id: 2, name: 'Responsive Online Store Template', price: 150 },
  { id: 3, name: 'Small Business Ecommerce Package', price: 200 },
  { id: 4, name: 'Top Ecommerce Design Examples 2025', price: 250 },
  { id: 5, name: 'Beginners Ecommerce Site Guide', price: 300 }
];

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price, 0);
  };

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial, sans-serif', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Header */}
      <header style={{ backgroundColor: '#007BFF', padding: '15px', color: '#fff', textAlign: 'center' }}>
        <h1 style={{ fontSize: '32px' }}>Best Ecommerce Website Design 2025</h1>
        <p>Explore the best ecommerce platforms, design tips, and successful online store examples.</p>
      </header>

      {/* Navbar */}
      <nav style={{ display: 'flex', justifyContent: 'center', padding: '10px 0', backgroundColor: '#f1f1f1' }}>
        <a href="#" style={{ margin: '0 15px', textDecoration: 'none', color: '#007BFF' }}>Home</a>
        <a href="#" style={{ margin: '0 15px', textDecoration: 'none', color: '#007BFF' }}>Ecommerce Platforms</a>
        <a href="#" style={{ margin: '0 15px', textDecoration: 'none', color: '#007BFF' }}>Store Examples</a>
        <a href="#" style={{ margin: '0 15px', textDecoration: 'none', color: '#007BFF' }}>Design Tips</a>
        <a href="#" style={{ margin: '0 15px', textDecoration: 'none', color: '#007BFF' }}>Contact</a>
      </nav>

      {/* Product Section */}
      <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', marginBottom: '30px', marginTop: '20px' }}>
        {products.map((product) => (
          <div key={product.id} style={{ padding: '15px', border: '1px solid #ccc', borderRadius: '8px', width: '220px' }}>
            <h2 style={{ fontSize: '22px' }}>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <button onClick={() => addToCart(product)} style={{ padding: '8px 15px', cursor: 'pointer', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '4px' }}>Add to Cart</button>
          </div>
        ))}
      </div>

      {/* Cart Section */}
      <h2 style={{ fontSize: '28px', marginBottom: '15px' }}>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty. Explore our ecommerce site templates and online shop design ideas.</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index} style={{ padding: '8px 0', fontSize: '18px' }}>{item.name} - ${item.price}</div>
          ))}
          <h3 style={{ marginTop: '15px', fontSize: '24px' }}>Total: ${calculateTotal()}</h3>
        </div>
      )}

      {/* Footer */}
      <footer style={{ backgroundColor: '#007BFF', padding: '15px', color: '#fff', textAlign: 'center', marginTop: '30px' }}>
        <p>&copy; 2025 Ecommerce Website Design. Discover the best ecommerce platforms and online store templates.</p>
      </footer>
    </div>
  );
}