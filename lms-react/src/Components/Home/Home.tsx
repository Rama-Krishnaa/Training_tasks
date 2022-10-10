import React from "react";
import { useNavigate } from "react-router-dom";
import "../Home/Home.css";
import Logo from "../../images/logo1.jpeg";
function Home() {
const navigate = useNavigate();
  return (
    <div id="home">
      <header>
        <img src={Logo} alt="logo" />
        <h1>Welcome</h1>
        <nav>
          <button onClick={()=> navigate('/login')} > Login
          </button>
          <button onClick={()=> navigate('/register')}> Register
          </button>
        </nav>
      </header>
    </div>
  );
}

export default Home;
