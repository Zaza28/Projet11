import "../css/style.css";
import image from "../images/argentBankLogo.webp";
import { useEffect } from "react";
import { useSelector, useDispatch} from "react-redux";
import { getUser, logout } from "../reducers/userReducer";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const { currentUser, token } = useSelector((state)=> state.userSlice || {}); // État pour gérer l'authentification
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Vérifier si l'utilisateur est connecté
  useEffect(() => {
    if (token) {
      dispatch(getUser()).catch(() => {
        console.log("Error fetching user, logging out.");
        dispatch(logout()); // Déconnexion en cas d'erreur
      });    
    }
  }, [token, dispatch]);


  // Gérer la déconnexion
  const handleSignOut = () => {
    dispatch(logout());
    navigate("/SignIn"); // Redirige vers la page de connexion
  };

  return (
    <nav className="main-nav">
      <a className="main-nav-logo" href="/">
        <img
          className="main-nav-logo-image"
          src={image}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>

      <div>
        {/* Si l'utilisateur est authentifié, afficher "User" et "Sign Out" */}
        {token ? (
          <>
            <a className="main-nav-item" href="/User">
              <i className="fa fa-user-circle"></i>
              {currentUser ? currentUser.firstName : "User"}
              
            </a>
            <a className="main-nav-item" href="#signout" onClick={handleSignOut}>
              <i className="fa fa-sign-out"></i>
              Sign Out
            </a>
          </>
        ) : (
          // Sinon afficher "Sign In"
          <a href="/SignIn" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Sign In
          </a>
        )}
      </div>
    </nav>
  );
}
