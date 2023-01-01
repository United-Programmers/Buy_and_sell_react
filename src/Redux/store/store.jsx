import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../Slices/cartSlice';
import modalSlice from '../Slices/modalSlice'
import tenantSlice from '../Slices/TenantSlice'
import userSlice from '../Slices/userSlice'

import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

const reducers = combineReducers({
  users: userSlice,
  cart: cartSlice,
});

const persistConfig = {
  key: 'users',
  storage,
}

const persist = persistReducer(persistConfig, reducers);

export const Redux_store = configureStore({
  reducer: persist,
  middleware: [thunk],
});

// const persistedStore = persistStore(Redux_store);
// export { Redux_store, persistedStore };