//! This is our State
import { createSlice } from '@reduxjs/toolkit';
// import cartItems from '../../cartItems'; 

const initialState = {
  isOpen: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState, // state

  reducers: {
    openModal: (state, action) =>{
        state.isOpen = true
    },
    closeModal: (state, action) =>{
        state.isOpen = false
    }
  },
});

//go inside [initialState] & pull me out cartItem
export const isOpen = (state) => state.modal.isOpen

//Actions
export const { openModal, closeModal } = modalSlice.actions;

// Export Slice
export default modalSlice.reducer;