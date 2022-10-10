import React, { useState } from "react";
import axios from "axios";
import "../Register/Register.css";
import { useNavigate } from "react-router-dom";
type IData = {
  name: string;
  email: string;
  password: string;
  gender: string;
  salary: number;
  role: string;
};
function Register() {
  const [registerData, setRegisterData] = useState<IData>({
    name: "",
    email: "",
    password: "",
    gender: "",
    salary: 0,
    role: "CUSTOMER",
  });

  const navigate = useNavigate();
  const onRegisterSuccess = () => {
    alert("You've successfully registered!")
    navigate("/");
  };
  const handleRegister = (event: any) => {
    event.preventDefault();

    axios
      .post(` http://localhost:4000/user`, {
        name: registerData.name,
        email: registerData.email,
        password: registerData.password,
        gender: registerData.gender,
        salary: registerData.salary,
        role: registerData.role
        // registerData
      })
      .then((response) => {
        // console.log(response);
        console.log(registerData);
        onRegisterSuccess();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };
  return (
    <div id="register">
      <h1>Create an account</h1>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={(e) => handleChange(e)}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          onChange={(e) => handleChange(e)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          onChange={(e) => handleChange(e)}
        />
        <div className="gender">
          <label htmlFor="gender">Gender</label>
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="gender">Male</label>
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="gender">Female</label>
        </div>
        <input
          type="number"
          name="salary"
          placeholder="Salary"
          required
          onChange={(e) => handleChange(e)}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
