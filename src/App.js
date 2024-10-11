import { BrowserRouter, Routes, Route, Navigate, } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import User from "./pages/User";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import useAuth from "./outils/useAuth";
import "../src/css/style.css"

function App() {
const isAuthenticated = useAuth();

  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index element ={<Home />}/>
        <Route path="/Home" element={<Home />}/>
        <Route path="/SignIn" element={<SignIn />}/>
        <Route path="/User" element={isAuthenticated ? <User /> : <Navigate to="/SignIn" />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
