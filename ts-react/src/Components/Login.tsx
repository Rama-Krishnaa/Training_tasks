import React, { useState } from "react";
import Greet from "./Greet";

export default function Login() {
  const [isLogged, setIsLogged] = useState(false);
  function handleLogIn() {
    setIsLogged(true);
  }
  function handleLogOut() {
    setIsLogged(false);
  }
  return (
    <div>
      <button onClick={handleLogIn}>Log in</button>
      <button onClick={handleLogOut}>Log out</button>
      <Greet isLogged={isLogged} />
    </div>
  );
}
