import "../css/style.css";
import AccountBank from "../components/AccountBank";

export default function User(){
    return(
        <>
        <nav>
        <div>
        <a className="main-nav-item" href="./user.html">
          <i className="fa fa-user-circle"></i>
          Tony
        </a>
        <a className="main-nav-item" href="./index.html">
          <i className="fa fa-sign-out"></i>
          Sign Out
        </a>
      </div>
        </nav>
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back <br /> Tony Jarvis!</h1>
                <button className="edit-button">Edit Name</button>
            </div>
            <h2 className="sr-only">Accounts</h2>
            <AccountBank />
        </main>
        </>
    )
}