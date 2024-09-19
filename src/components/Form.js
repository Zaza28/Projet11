import "../css/style.css";

export default function Form() {
  return (
    <div>
      <form>
        <div className="input-wrapper">
          <label for="username">Username</label>
          <input type="text" id="username"></input>
        </div>
        <div className="input-wrapper">
          <label for="password">Password</label>
          <input type="password" id="password"></input>
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me"></input>
          <label for="remember-me">Remember me</label>
        </div>
        
         <button className="sign-in-button"><a href="/User"className="main-nav-item">Sign In</a></button>
       
      </form>
    </div>
  );
}
