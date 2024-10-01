import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer'; 

const store = configureStore({
  reducer: {
    userSlice: userReducer
  },
  devTools: process.env.NODE_ENV !== 'production',  // Active Redux DevTools en mode développement
});

export default store;
