import React, {useState} from 'react'
import Login from './Login'

type IProps ={
    isLogged: boolean
}
export default function Greet(props: IProps) {
    
  return (
    <div>
        {props.isLogged ? <h1>Welcome Peter</h1> : <h1>Welcome Guest</h1>}
        
    </div>
  )
}
