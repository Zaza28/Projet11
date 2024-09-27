import { useState } from "react";  // Tu as oublié d'importer `useState`
import "../css/style.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/authActions";  // L'action de connexion

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { loading, error, isAuthenticated } = useSelector(
    (state) => state.auth
  );

  const handleSubmit = (e) => {
    e.preventDefault();  // Empêche le comportement par défaut du formulaire (rechargement de la page)
    dispatch(login(username, password));  // Déclenche l'action de connexion avec les valeurs du formulaire
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>  {/* Ajoute l'événement onSubmit pour gérer la soumission du formulaire */}
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}  // Lier l'état 'username' au champ
            onChange={(e) => setUsername(e.target.value)}  // Met à jour l'état quand l'utilisateur tape
            required
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}  // Lier l'état 'password' au champ
            onChange={(e) => setPassword(e.target.value)}  // Met à jour l'état quand l'utilisateur tape
            required
          />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>

        {/* Le bouton soumet maintenant le formulaire correctement */}
        <button type="submit" className="sign-in-button" disabled={loading}>
          {loading ? 'Connexion en cours...' : 'Sign In'}
        </button>

        {/* Affichage des erreurs */}
        {error && <p style={{ color: "red" }}>{error}</p>}

        {/* Si l'utilisateur est authentifié, tu pourrais rediriger ou afficher un message */}
        {isAuthenticated && <p>Connexion réussie !</p>}
      </form>
    </div>
  );
};

export default LoginForm;
