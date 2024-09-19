import "../css/style.css";
import Form from "../components/Form";

export default function SignIn(){
    return(
        <main className="main bg-dark">
            <section className="sign-in-content">
                <h1>Sign In</h1>
                <Form />
            </section>
        </main>
    )
}