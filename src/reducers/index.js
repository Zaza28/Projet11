// reducers/index.js
import { combineReducers } from 'redux';
import userReducer from './user.reducer';  
import authReducer from './authReducer';

// Combine les différents réducteurs
const rootReducer = combineReducers({
  counter: userReducer,  
  auth: authReducer, // On associe le réducteur d'authentification à la clé 'auth'
});

export default rootReducer;
