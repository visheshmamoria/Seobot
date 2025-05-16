import React from 'react';
import { useState } from 'react';

const products = [
  { id: 1, name: 'Modern Ecommerce Platform Design 2025', price: 100, description: 'Explore the best ecommerce website design tips and tricks for creating a visually compelling online store in 2025. Ideal for businesses looking for ecommerce platform comparison and design inspiration.' },
  { id: 2, name: 'Responsive Online Store Template', price: 150, description: 'Boost your digital storefront with our top ecommerce site templates. Enhance user experience with responsive layouts and best ecommerce website design practices.' },
  { id: 3, name: 'Small Business Ecommerce Package', price: 200, description: 'Perfect for small businesses looking for a complete ecommerce website design solution with stunning product displays, easy checkout, and ecommerce platform recommendations.' },
  { id: 4, name: 'Top Ecommerce Design Examples 2025', price: 250, description: 'Get inspired by successful online store examples and learn how to build a responsive ecommerce site that converts visitors into customers effectively.' },
  { id: 5, name: 'Beginners Ecommerce Site Guide', price: 300, description: 'A step-by-step guide to ecommerce website design for beginners, including tips on platform selection, how to create a visually appealing online store, and ecommerce website design inspiration.' }
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
      {/* Main Heading */}
      <h1 style={{ fontSize: '40px', textAlign: 'center', marginBottom: '20px' }}>Comprehensive Ecommerce Website Design and Online Store Solutions 2025</h1>

      {/* Header */}
      <header style={{ backgroundColor: '#007BFF', padding: '15px', color: '#fff', textAlign: 'center' }}>
        <h2 style={{ fontSize: '36px' }}>Best Ecommerce Website Design Tips & Examples 2025</h2>
        <p>Discover how to design a successful ecommerce website, compare the top ecommerce platforms, and explore stunning online store examples.</p>
      </header>

      {/* Navbar */}
      <nav style={{ display: 'flex', justifyContent: 'center', padding: '10px 0', backgroundColor: '#f1f1f1' }}>
        <a href="#" style={{ margin: '0 15px', textDecoration: 'none', color: '#007BFF' }}>Home</a>
        <a href="#" style={{ margin: '0 15px', textDecoration: 'none', color: '#007BFF' }}>Ecommerce Platforms</a>
        <a href="#" style={{ margin: '0 15px', textDecoration: 'none', color: '#007BFF' }}>Store Examples</a>
        <a href="#" style={{ margin: '0 15px', textDecoration: 'none', color: '#007BFF' }}>Design Tips</a>
        <a href="#" style={{ margin: '0 15px', textDecoration: 'none', color: '#007BFF' }}>Contact Us</a>
      </nav>

      {/* Product Section */}
      <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', marginBottom: '30px', marginTop: '20px' }}>
        {products.map((product) => (
          <div key={product.id} style={{ padding: '15px', border: '1px solid #ccc', borderRadius: '8px', width: '220px' }}>
            <h3 style={{ fontSize: '24px' }}>{product.name}</h3>
            <p style={{ fontSize: '14px', marginBottom: '10px' }}>{product.description}</p>
            <p style={{ fontWeight: 'bold' }}>Price: ${product.price}</p>
            <button onClick={() => addToCart(product)} style={{ padding: '8px 15px', cursor: 'pointer', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '4px' }}>Add to Cart</button>
          </div>
        ))}
      </div>

      {/* Cart Section */}
      <h2 style={{ fontSize: '28px', marginBottom: '15px' }}>Your Shopping Cart - Best Ecommerce Products</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty. Explore our ecommerce website design templates, responsive site examples, and small business ecommerce solutions.</p>
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
        <p>&copy; 2025 Ecommerce Website Design - Online Store Templates and Ecommerce Platform Comparison. Build a successful ecommerce business today.</p>
        <p>Contact us to learn more about ecommerce website design services in your city, how to choose the best ecommerce platform, and how to create a visually appealing digital storefront for your business.</p>
      </footer>
    </div>
  );
}