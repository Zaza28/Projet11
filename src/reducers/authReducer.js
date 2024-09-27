// reducers/authReducer.js
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/authActions';

const initialState = {
  loading: false,
  user: null,  // Contiendra les infos de l'utilisateur après connexion
  error: null,
  isAuthenticated: false,  // Permet de savoir si l'utilisateur est connecté
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,  // On stocke les données de l'utilisateur retournées par le backend
        isAuthenticated: true,  // L'user est désormais connecté
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,  // On stocke l'erreur retournée
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default authReducer;
