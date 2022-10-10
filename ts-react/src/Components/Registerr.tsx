import React, { useState } from 'react'
import axios from 'axios'

type IData = {
    name: string
    email: string
    password: string
}

function Registerr() {
  console.log('Register Page')
    const [registerData, setRegisterData] = useState<IData>({name: '', email: '', password: ''})

    const handleRegister = () => {
        axios.post(
          ` https://angularjwtauthentication.herokuapp.com/api/user/register`,
          {
              name: registerData.name,
              email: registerData.email,
              password: registerData.password
          })
          .then((response) => {
            console.log(response)
          })
          .catch((error) => {
              console.log(error)
          })
      }

      const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        setRegisterData({...registerData, [e.target.name]:e.target.value})
    }
  return (
    <div>
      <input type="text" name="name" onChange={(e)=>handleChange(e)}/>
      <input type="email" name='email' onChange={(e)=>handleChange(e)}/>
      <input type="password" name='password' onChange={(e)=>handleChange(e)}/>
      <button onClick={handleRegister}>Register</button>
    </div>
  )
}

export default Registerr;
