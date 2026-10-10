import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, selectCartItems, selectTotalQuantity } from './CartSlice.jsx';
import CartItem from './CartItem.jsx';
import './ProductList.css';

const img = (slug) => `${import.meta.env.BASE_URL}images/plants/${slug}.png`;

const plantsArray = [
  {
    category: 'Air Purifying Plants',
    plants: [
      { name: 'Snake Plant', image: img('snake-plant'), description: 'Produces oxygen at night, improving air quality.', cost: 15 },
      { name: 'Spider Plant', image: img('spider-plant'), description: 'Filters formaldehyde and xylene from the air.', cost: 12 },
      { name: 'Peace Lily', image: img('peace-lily'), description: 'Removes mold spores and purifies the air.', cost: 18 },
      { name: 'Boston Fern', image: img('boston-fern'), description: 'Adds humidity and removes toxins from the air.', cost: 20 },
      { name: 'Rubber Plant', image: img('rubber-plant'), description: 'Easy to care for and effective at purifying indoor air.', cost: 17 },
      { name: 'Areca Palm', image: img('areca-palm'), description: 'A natural humidifier that fills a room with greenery.', cost: 24 },
    ],
  },
  {
    category: 'Aromatic Fragrant Plants',
    plants: [
      { name: 'Lavender', image: img('lavender'), description: 'Calming scent, used in aromatherapy.', cost: 20 },
      { name: 'Jasmine', image: img('jasmine'), description: 'Sweet fragrance that promotes relaxation.', cost: 18 },
      { name: 'Rosemary', image: img('rosemary'), description: 'Invigorating scent, great for cooking too.', cost: 15 },
      { name: 'Mint', image: img('mint'), description: 'Refreshing aroma, perfect for teas and cooking.', cost: 12 },
      { name: 'Lemon Balm', image: img('lemon-balm'), description: 'Citrusy scent that soothes and uplifts.', cost: 14 },
      { name: 'Basil', image: img('basil'), description: 'Fragrant herb, a kitchen windowsill favourite.', cost: 10 },
    ],
  },
  {
    category: 'Succulents and Cacti',
    plants: [
      { name: 'Aloe Vera', image: img('aloe-vera'), description: 'Soothing gel for skin; very low maintenance.', cost: 14 },
      { name: 'Cactus', image: img('cactus'), description: 'Thrives on neglect and loves bright light.', cost: 9 },
      { name: 'Jade Plant', image: img('jade-plant'), description: 'Said to bring good luck; long-lived and hardy.', cost: 16 },
      { name: 'Echeveria', image: img('echeveria'), description: 'Rosette-shaped succulent in lovely shades.', cost: 11 },
      { name: 'Haworthia', image: img('haworthia'), description: 'Compact, striped succulent for small spaces.', cost: 13 },
      { name: 'ZZ Plant', image: img('zz-plant'), description: 'Glossy leaves; tolerates low light and drought.', cost: 22 },
    ],
  },
];

function ProductList({ onHomeClick }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalQuantity = useSelector(selectTotalQuantity);
  const [showCart, setShowCart] = useState(false);

  const isInCart = (name) => cartItems.some((item) => item.name === name);

  const handleAddToCart = (plant) => {
    dispatch(addItem({ name: plant.name, image: plant.image, cost: plant.cost }));
  };

  const goHome = (e) => { e.preventDefault(); onHomeClick(); };
  const goPlants = (e) => { e.preventDefault(); setShowCart(false); };
  const goCart = (e) => { e.preventDefault(); setShowCart(true); };

  return (
    <div>
      <div className="navbar">
        <div className="navbar-brand">
          <a href="#" onClick={goHome} className="brand-link">
            <span className="brand-logo" aria-hidden="true">🌿</span>
            <span>
              <h3 className="brand-title">Paradise Nursery</h3>
              <i className="brand-sub">Where Green Meets Serenity</i>
            </span>
          </a>
        </div>
        <div className="navbar-links">
          <a href="#" onClick={goHome}>Home</a>
          <a href="#" onClick={goPlants}>Plants</a>
          <a href="#" onClick={goCart} className="cart-link" aria-label="Shopping cart">
            <svg viewBox="0 0 256 256" height="40" width="40" aria-hidden="true">
              <rect width="156" height="156" fill="none"></rect>
              <circle cx="80" cy="216" r="12"></circle>
              <circle cx="184" cy="216" r="12"></circle>
              <path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" fill="none" stroke="#faf9f9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
            </svg>
            <span className="cart_quantity_count">{totalQuantity}</span>
          </a>
        </div>
      </div>

      {!showCart ? (
        <div className="product-grid">
          {plantsArray.map((group) => (
            <div key={group.category}>
              <h1 className="category-title"><div>{group.category}</div></h1>
              <div className="product-list">
                {group.plants.map((plant) => (
                  <div className="product-card" key={plant.name}>
                    <img className="product-image" src={plant.image} alt={plant.name} />
                    <div className="product-title">{plant.name}</div>
                    <div className="product-description">{plant.description}</div>
                    <div className="product-price">${plant.cost}</div>
                    <button
                      className="product-button"
                      disabled={isInCart(plant.name)}
                      onClick={() => handleAddToCart(plant)}
                    >
                      {isInCart(plant.name) ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={() => setShowCart(false)} />
      )}
    </div>
  );
}

export default ProductList;
