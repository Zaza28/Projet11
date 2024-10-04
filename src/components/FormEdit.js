import "../css/style.css";

export default function FormEdit() {
  return(
  <div>
    <form className="fromEdit">
        <div className="editform">
            <label htmlFor="User Name">User Name: </label>
            <input type="text"
            id="User name"  />
        </div>
        <div className="editform">
            <label htmlFor="First Name">First Name: </label>
            <input type="text"
            id="First name" disabled="disabled" />
        </div>
        <div className="editform">
            <label htmlFor="Last Name">Last Name: </label>
            <input type="text"
            id="Last name" disabled="disabled" />
        </div>
    </form>
  </div>
  


)
}

