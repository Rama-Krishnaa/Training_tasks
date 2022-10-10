import React, { useEffect, useState } from "react";
import axios from "axios";
import { response } from "express";

function Listt() {
    const [dataText, setDataText] = useState<string>('')
  console.log('List Page')

  useEffect(() => {
    console.log("inside useeffect");
    handleList();
  }, []);
  const handleList = () => {
    axios
      .get(`https://angularjwtauthentication.herokuapp.com/api/user/list`, {
        headers: {
          "content-type": "applicaton/json",
          "Authorization": `Bearer ${localStorage.getItem("setToken")}`,
        },
      })
      .then((response) => {
        setDataText(response.data.text);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
        <h4>{dataText}</h4>
    </div>
  );
}

export default Listt;
