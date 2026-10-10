import React, { useState } from 'react';
import ProductList from './ProductList.jsx';
import AboutUs from './AboutUs.jsx';
import './App.css';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  return (
    <div className="app-container">
      <div className={`landing-page ${showProductList ? 'fade-out' : ''}`}
           style={{ display: showProductList ? 'none' : 'flex' }}>
        <div className="landing-content">
          <h1>Paradise Nursery</h1>
          <p className="tagline">Where Green Meets Serenity</p>
          <button className="get-started-button" onClick={() => setShowProductList(true)}>
            Get Started
          </button>
        </div>
        <div className="aboutus-container">
          <AboutUs />
        </div>
      </div>
      {showProductList && (
        <div className="product-list-container">
          <ProductList onHomeClick={() => setShowProductList(false)} />
        </div>
      )}
    </div>
  );
}

export default App;
