import React, { ReactHTMLElement, useState } from "react";

type loginForm = {
  email: string;
  password: string;
  age: number;
};
export default function UseStateWithObject() {
  const [data, setData] = useState<loginForm>({
    email: "",
    password: "",
    age: 0,
  });
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    // console.log(typeof e.target)
    setData({ ...data, [e.target.name]: e.target.value });
  }
  return (
    <div>
      <form>
        <p>
          Email:
          <input type="email" name="email" onChange={(e) => handleChange(e)} />
        </p>
        <p>
          Password:
          <input
            type="password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
        </p>
        <p>
          Age:
          <input type="number" name="age" onChange={(e) => handleChange(e)} />
        </p>
      </form>
      {<h3>{JSON.stringify(data)}</h3>}
    </div>
  );
}
