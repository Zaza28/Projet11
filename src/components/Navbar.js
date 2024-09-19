import "../css/style.css";
import image from "../images/argentBankLogo.webp";

export default function NavBar() {
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
        <a href="/SignIn" className="main-nav-item">
          Sign In
        </a>
      </div>
    </nav>
  );
}
