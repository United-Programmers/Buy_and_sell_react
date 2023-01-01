//! This is our State
import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'; //this is when you are working with an  //! API
const url = 'https://course-api.com/react-useReducer-cart-project';

const cartItems = [
  {
    id: 'rec1JZlfCIBOPdcT2',
    title: 'Samsung Galaxy S8',
    price: '399.99',
    img: 'https://dl.airtable.com/.attachments/64b266ad865098befbda3c3577a773c9/24497852/yedjpkwxljtb75t3tezl.png',
    amount: 1,
  },
  {
    id: 'recB6qcHPxb62YJ75',
    title: 'google pixel',
    price: '499.99',
    img: 'https://dl.airtable.com/.attachments/91c88ae8c1580e2b762ecb3f73ed1eed/a633139a/phone-1_gvesln.png',
    amount: 1,
  },
  {
    id: 'recdRxBsE14Rr2VuJ',
    title: 'Xiaomi Redmi Note 2',
    price: '699.99',
    img: 'https://dl.airtable.com/.attachments/bae9208dc34f35128749ecda5b999e84/337c285d/phone-3_h2s6fo.png',
    amount: 1,
  },
  {
    id: 'recwTo160XST3PIoW',
    title: 'Samsung Galaxy S7',
    price: '599.99 ',
    img: 'https://dl.airtable.com/.attachments/91ee456448cef47deec553a2ea3fa8ad/b08bec68/phone-2_ohtt5s.png',
    amount: 1,
  },
];

const initialState = {
  cartItem: cartItems,
  // cartItem: [],
  amount: 6,
  total: 0,
  isLoading: true,
};

export const getCartItems = createAsyncThunk('cart/getCartItems',
  async (name, thunkAPI) => {
    try {
      const resp = await axios(url);

      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState, // state

  reducers: {
    ClearCart: (state) => {
      state.cartItem = []; // empty the state
      state.amount = 0
    },

    removeItem: (state, action) => {
      console.log(action);
      const id = action.payload; console.log(id); // action payload it is the ID 
      state.cartItem = state.cartItem.filter((item) => item.id !== id);
    },

    increase: (state, { payload }) => {
      console.log(payload);

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


  //! whenever working with and API
  extraReducers: {
    [getCartItems.pending]: (state) => {
      state.isLoading = true
    },

    [getCartItems.fulfilled]: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.cartItem = action.payload // here am passing the data from the API to to my initial state call [cartItem]
    },

    [getCartItems.rejected]: (state) => {
      state.isLoading = false;
    }
  }

});

//go inside [initialState] & pull me out cartItem
export const cartItem = (state) => state.cart.cartItem
export const amount = (state) => state.cart.amount
export const total = (state) => state.cart.total
export const isLoading = (state) => state.cart.isLoading

//Actions
export const { ClearCart, removeItem, increase, decrease, calculateTotals } = cartSlice.actions;

// Export Slice
export default cartSlice.reducer;