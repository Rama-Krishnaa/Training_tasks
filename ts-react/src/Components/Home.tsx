import axios from "axios";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Registerr from "./Registerr";
import Loginn from "./Loginn";
import Listt from "./Listt";
function Home() {
  const [registerStatus, setRegisterStatus] = useState<boolean>(false);
  const [loginStatus, setLoginStatus] = useState<boolean>(false);
  const [listStatus, setListStatus] = useState<boolean>(false);
  const [btnText, setBtnText] = useState<string>("Login");

  const handleRegisterBtn = () => {
    setRegisterStatus(!registerStatus);
    setLoginStatus(false);
    setListStatus(false);
  };

  const handleLoginBtn = () => {
    setLoginStatus(!loginStatus);
    localStorage.removeItem("token");
    // setBtnText('Logout')
    // localStorage.getItem('token') ? localStorage.removeItem('token') : null;
    // localStorage.getItem('token') ? btnText : setBtnText('Login');
    // loginStatus ? setBtnText('Logout') : btnText;
    setRegisterStatus(false);
    setListStatus(false);
  };

  const handleListBtn = () => {
    setListStatus(!listStatus);
    setLoginStatus(false);
    setRegisterStatus(false);
  };
  return (
    <>
    <h1>Home Page</h1>
      <Link to="/register">
        <button onClick={handleRegisterBtn}>Register</button>
      </Link>
      <Link to="/login">
        <button onClick={handleLoginBtn}>
          {localStorage.getItem("token") ? "Logout" : "Login"}
        </button>
      </Link>
      <Link to="/list">
        <button onClick={handleListBtn}>List</button>
      </Link>
      {/* <button onClick={(e) => setRegisterStatus()}>Register Page</button>
      <button onClick={(e) => setLoginStatus(!loginStatus)}>Login Page</button>
      <button onClick={(e) => setListStatus(!listStatus)}>List Page</button> */}

      {registerStatus ? <Registerr /> : null}
      {loginStatus ? <Loginn /> : null}
      {listStatus ? <Listt /> : null}
    </>
  );
}

export default Home;
