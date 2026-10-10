# Paradise Nursery (e-plantShopping)

This repository, **e-plantShopping**, contains Paradise Nursery, an online plant shop built with React, Redux Toolkit and Vite. It features a landing page, plant catalogue and shopping cart.

## Features
- **Landing page** with the company name, a short description, a *Get Started* button and an About Us section.
- **Product listing** of 18 houseplants in three categories (Air Purifying, Aromatic Fragrant, Succulents and Cacti). Each card shows an image, name, description and price, plus an *Add to Cart* button that is disabled once the plant is in the cart.
- **Header / navbar** on the plants and cart pages with *Home*, *Plants* and *Cart* links; the cart icon shows the total number of items.
- **Shopping cart** page with the total cart amount, thumbnail, name, unit price and subtotal for each plant, increase/decrease quantity buttons, a delete button, *Continue Shopping* and *Checkout* (shows "Coming Soon").

## Project structure
| File | Purpose |
| --- | --- |
| `src/App.jsx` / `App.css` | Landing page and top-level navigation |
| `src/AboutUs.jsx` | About Us section |
| `src/ProductList.jsx` | Navbar, plant catalogue and cart toggle |
| `src/CartItem.jsx` | Shopping cart view |
| `src/CartSlice.jsx` | Redux slice (`addItem`, `removeItem`, `updateQuantity`) |
| `src/store.js` | Redux store |

## Run locally
```bash
npm install
npm run dev
```

## Build and deploy to GitHub Pages
```bash
npm run deploy
```
This builds the app and publishes `dist` to the `gh-pages` branch. Enable GitHub Pages for that branch in the repository settings.
