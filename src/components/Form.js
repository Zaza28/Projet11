import { useState } from "react";  // Tu as oublié d'importer `useState`
import "../css/style.css";
import { useDispatch} from "react-redux";
import { login } from "../reducers/userReducer";  // L'action de connexion
import { useNavigate } from "react-router-dom";


const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const [error, setError] = useState(null);


  const dispatch = useDispatch();


  const handleSubmit = (e) => {
    e.preventDefault();  // Empêche le comportement par défaut du formulaire (rechargement de la page)
    
    // console.log("Form submitted with:", { email, password });
    
  //réinitialiser les erreurs :
  setError(null);  
    
    
    
    
  dispatch(login({ email, password }))  // Déclenche l'action de connexion avec les valeurs du formulaire
  .then((rep) =>{

    if (rep.meta.requestStatus === "fulfilled"){
      navigate("/User"); //redirige que si la co réussit
    } else if (rep.meta.requestStatus === "rejected"){
      setError("Invalid login credentials. Please try again.");
    }
  })
  .catch((err)=>{
    console.error(err);
    // console.error("Dispatch error:", err);
    setError("An error occurred. Please try again");
  })
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>  {/* Ajoute l'événement onSubmit pour gérer la soumission du formulaire */}
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={email}  // Lier l'état 'email' au champ
            onChange={(e) => setEmail(e.target.value)}  // Met à jour l'état quand l'utilisateur tape
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
        <button type="submit" className="sign-in-button" >
          Sign In
        </button>

        {/* Affichage des erreurs */}
        {error && <p style={{ color: "red" }}>{error}</p>}

   
      </form>
    </div>
  );
};

export default LoginForm;
