import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Message from "./Components/Message";
import Summary from "./Components/Summary";
import Card from "./Components/Card";
import items from "./Components/Movie";
import Login from "./Components/Login";
import UseStateWithObject from "./Components/UseStateWithObject";
import Todo from "./Components/Todo";
import UseEffectDemo from "./Components/UseEffectDemo";
import UseMemoDemo from "./Components/UseMemoDemo";
import Layout from "./Components/Layout";
import FetchData from "./Components/FetchData";
import Home from "./Components/Home";
import Loginn from "./Components/Loginn";
import Registerr from "./Components/Registerr";
import Listt from "./Components/Listt";

let names = ["John", "Rama", "Krishna", "Kitty"];
function App() {
  const printName = (myname: string) => {
    console.log(myname);
  };
  return (
    <div>
      {/* <Message info="Google" status="Active"/> */}
      {/* <Message info="Microsoft" status="Inactive"/> */}
      {/* <Message info="Microsoft" status={true}/> */}
      {/* <hr/> */}
      {/* <Summary colors={ ['RED','BLUE','GREEN','WHITE'] } /> */}

      {/* <table border={1}>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              names.map((name: string, index:number) =>
              <tr key={index}>
                <Summary 
                  index={index} 
                  name={name}
                  printNameCallback={printName} 
                  />
              </tr>
              )
            }
          </tbody>
        </table> */}

      {/* <Card /> */}
      {/* <Login/> */}
      {/* <UseStateWithObject /> */}
      {/* <UseEffectDemo/> */}
      {/* <Todo/> */}
      {/* <UseMemoDemo/> */}
      {/* <Layout/> */}
      {/* <FetchData/> */}
      {/* <Home/> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Loginn />}></Route>
          <Route path="/register" element={<Registerr />}></Route>
          <Route path="/list" element={<Listt />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
