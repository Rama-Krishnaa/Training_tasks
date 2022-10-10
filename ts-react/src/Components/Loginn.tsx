import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

type IData = {
  email: string;
  password: string;
};

function Loginn() {
  const [btnStatus, setBtnStatus] = useState<boolean>(false);
  const [loginData, setLoginData] = useState<IData>({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const onLoginSuccess = () => {
    navigate('/')
  }

  const handleLogin = () => {
    axios
      .post(` https://angularjwtauthentication.herokuapp.com/api/user/login`, {
        email: loginData.email,
        password: loginData.password,
      })
      .then((response) => {
        alert("Logged In");
        onLoginSuccess();
        localStorage.setItem("token", response.data.token);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <input type="email" name="email" onChange={(e) => handleChange(e)} />
      <input
        type="password"
        name="password"
        onChange={(e) => handleChange(e)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Loginn;
