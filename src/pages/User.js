import "../css/style.css";
import AccountBank from "../components/AccountBank";
import { useSelector } from "react-redux";

export default function User() {
 const { currentUser } = useSelector((state)=> state.userSlice);


  return (
    <>
      <main className="main bg-dark">
        <div className="header">
          <h1>Welcome back <br /> {currentUser ? currentUser.firstName : "User"}!</h1>
          <button className="edit-button">Edit Name</button>
        </div>
        <h2 className="sr-only">Accounts</h2>
        <AccountBank />
      </main>
    </>
  );
}
