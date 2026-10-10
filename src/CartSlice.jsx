import { createSlice } from '@reduxjs/toolkit';

// Each cart item: { name, image, cost, quantity }
// "cost" is the unit price as a number (e.g. 15 for $15).
export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    // Add a plant, or increase its quantity if it is already in the cart.
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find((item) => item.name === name);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },

    // Remove a plant type from the cart completely.
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.name !== action.payload);
    },

    // Set the quantity of a plant. A quantity of 0 or less removes it.
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      if (quantity <= 0) {
        state.items = state.items.filter((item) => item.name !== name);
        return;
      }
      const itemToUpdate = state.items.find((item) => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Selectors
export const selectCartItems = (state) => state.cart.items;
export const selectTotalQuantity = (state) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);
export const selectTotalAmount = (state) =>
  state.cart.items.reduce((total, item) => total + item.cost * item.quantity, 0);

export default CartSlice.reducer;
