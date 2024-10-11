import "../css/style.css";
import AccountBank from "../components/AccountBank";
import FormEdit from "../components/FormEdit.js"; 
import { useDispatch, useSelector } from "react-redux";
import { startEditing, stopEditing } from "../reducers/userReducer.js";




export default function User() {
  const dispatch = useDispatch();
 const { currentUser, isEditing } = useSelector((state)=> state.userSlice);
 //gestion des actions des boutons:

 const handleEditClick= () =>{
  dispatch(startEditing()); //active le mode édition
 }

 const handleCancelClick =()=>{
  dispatch(stopEditing());
 };



  return (
    <>
      <main className="main bg-dark">
        <div className="header">
          <h1>Welcome back <br /> {currentUser ? currentUser.userName : "User"}!</h1>
           {/* Affichage conditionnel basé sur l'état Redux */}
           {isEditing ? (
            <>
              <FormEdit  />
              <button className="edit-button" onClick={handleCancelClick}>Cancel</button>
            </>
          ) : (
            <button className="edit-button" onClick={handleEditClick}>Edit Name</button>
          )}
        </div>
        
        <h2 className="sr-only">Accounts</h2>
        <AccountBank />
      </main>
    </>
  );
}
