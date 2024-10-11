import "../css/style.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setNewUserName, updateUser } from "../reducers/userReducer";
import { useState } from "react"; 

export default function FormEdit() {
  const { currentUser } = useSelector((state) => state.userSlice || {}); // État pour gérer l'authentification
  const dispatch = useDispatch();
  const [userName, setuserName] = useState(currentUser.userName || "");

  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le comportement par défaut du formulaire (rechargement de la page)
    // console.log("Form submitted with:", { email, password });

    //réinitialiser les erreurs :
  // Mettre à jour le nom d'utilisateur dans le store
  dispatch(setNewUserName(userName));


    dispatch(updateUser( userName )) // Déclenche l'action de connexion avec les valeurs du formulaire
      .catch((err) => {
        console.error(err);
        // console.error("Dispatch error:", err);
      });
  };

  //afficher toute la div si on clique sur le bouton edit ou pas 
  //pas besoin de creer handleisediting
  return (
    <div>
      <form className="fromEdit" onSubmit={handleSubmit}>
        <div className="editform">
          <label htmlFor="User Name">User Name: </label>
          <input
            type="text"
            id="User name"
            value={userName}
            onChange={(e) => setuserName(e.target.value)}
          />
        </div>
        <div className="editform">
          <label htmlFor="First Name">First Name: </label>
          <input
            type="text"
            id="First name"
            disabled="disabled"
            defaultValue={currentUser.firstName}
          />
        </div>
        <div className="editform">
          <label htmlFor="Last Name">Last Name: </label>
          <input
            type="text"
            id="Last name"
            disabled="disabled"
            defaultValue={currentUser.lastName}
          />
        </div>
        <button  type="submit" className="edit-button">Save</button>

      </form>
    </div>
  );
}
