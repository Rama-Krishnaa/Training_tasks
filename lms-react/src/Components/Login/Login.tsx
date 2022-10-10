import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import "../Login/Login.css";
type IData = {
  email: string;
  password: string;
};
type IUserData = {
  id: number;
  email: string;
  gender: string;
  name: string;
  password: string;
  role: string;
};

function Login() {
  const [role, setRole] = useState<string>("");
  const [loginData, setLoginData] = useState<IData>({
    email: "",
    password: "",
  });
  const [userData, setUserData] = useState<IUserData[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/user`)
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);

  const handleLogin = () => {
    userData.map((user: IUserData, index: number) => {
      if (
        loginData.email === user.email &&
        loginData.password === user.password
      ) {
        setRole(user.role);
        localStorage.setItem("email", user.email);
        localStorage.setItem("name", user.name);
        localStorage.setItem("role", user.role);
      }
      if (
        loginData.email === user.email &&
        loginData.password !== user.password
      ) {
        alert("Please enter the correct credentials");
      }
    });
  };
  useEffect(() => {
    if(role==='CUSTOMER') {
      navigate('/customer-dash')
    }
    if(role==='MANAGER') {
      navigate('/manager-dash')
    }
  }, [role]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  return (
    <div id="login">
      <div id="login-container">
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => handleChange(e)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;
