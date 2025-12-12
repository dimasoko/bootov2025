import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './slices/uiSlice';
import modalsReducer from './slices/modalsSlice';
import adminReducer from './slices/adminSlice';

const store = configureStore({
  reducer: {
    ui: uiReducer,
    modals: modalsReducer,
    admin: adminReducer
  },
  devTools: process.env.NODE_ENV !== 'production'
});


export default store;
