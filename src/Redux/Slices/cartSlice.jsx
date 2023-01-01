import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
const url = 'https://course-api.com/react-useReducer-cart-project';
// const url = 'https://jsonplaceholder.typicode.com/photos';
import ReduxData from '../../ReduxData';

export const getCartItems = createAsyncThunk('cart/getCartItems', () => {
  return fetch(url)
    .then((res) => res.json())
    .catch((err) => console.log(err));
});

const initialState = {
  // cartItem: [],
  cartItem: ReduxData,
  amount: 6,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {
    ClearCart: (state) => {
      state.cartItem = [];
      state.amount = 0
    },

    removeItem: (state, action) => {
      const id = action.payload; console.log(id);
      state.cartItem = state.cartItem.filter((item) => item.id !== id);
    },

    increase: (state, { payload }) => {
      const cartItem = state.cartItem.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount + 1;
    },

    decrease: (state, { payload }) => {
      const cartItem = state.cartItem.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount - 1;
    },

    calculateTotals: (state) => {
      console.log(state);
      let amount = 0;
      let total = 0;
      state.cartItem.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },

  extraReducers: {
    [getCartItems.pending]: (state) => {
      state.isLoading = true
    },

    [getCartItems.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.cartItem = action.payload
    },

    [getCartItems.rejected]: (state) => {
      state.isLoading = false;
    }
  }

});

export const cartItem = (state) => state.cart.cartItem
export const amount = (state) => state.cart.amount
export const total = (state) => state.cart.total
export const isLoading = (state) => state.cart.isLoading

export const { ClearCart, removeItem, increase, decrease, calculateTotals } = cartSlice.actions;
export default cartSlice.reducer;