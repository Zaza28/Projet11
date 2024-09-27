import axios from 'axios';

// Définir l'URL de ton API de connexion
const loginApi = 'http://localhost:3001/api/v1/user/login';

// Action login
export const login = (username, password) => async (dispatch) => {
  try {
    // Déclencher l'action de début de chargement
    dispatch({ type: 'LOGIN_REQUEST' });

    // Envoyer la requête POST avec axios
    const response = await axios.post(loginApi, {
      userName: username,
      password: password,
    });

    // Si la connexion est réussie
    dispatch({
      type: 'LOGIN_SUCCESS',
      payload: response.data,  // Les données renvoyées par l'API, comme le token ou l'utilisateur
    });

    // Stocker le token dans le localStorage si nécessaire
    localStorage.setItem('token', response.data.token);

  } catch (error) {
    // Si la connexion échoue
    dispatch({
      type: 'LOGIN_FAIL',
      payload: error.response?.data?.message || 'Erreur de connexion',
    });
  }
};
