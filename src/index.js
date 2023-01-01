import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import { BrowserRouter } from "react-router-dom"
import "./i18n"
import { Provider, createDispatchHook, createSelectorHook } from "react-redux"
const store1Context = React.createContext();

import { Slide, ToastContainer } from 'react-toastify';

import store from "./store"
import { Redux_store } from './Redux/store/store';
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
let persistedStore = persistStore(Redux_store);

const app = (
  <Provider store={Redux_store} context={store1Context}>
    <PersistGate loading={null} persistor={persistedStore}>
      <Provider store={store}>
        <ToastContainer transition={Slide} newestOnTop />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </PersistGate>
  </Provider>
)

export const useDispatch_2 = createDispatchHook(store1Context);
export const useSelector_2 = createSelectorHook(store1Context);

ReactDOM.render(app, document.getElementById("root"))
serviceWorker.unregister()