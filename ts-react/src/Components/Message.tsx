import React from 'react'

type IProps = {
    info?: string
    status?: string
}

// export default function Message(props:IProps) {
export default function Message({info,status}:IProps) {
//   console.log(props)
//   let {info, status} = props
  return (
    <div>
         {/* <h1>{props.info} , {props.status}</h1> */}
         <h1>{info} , {status}</h1>
         <h1>ReactJS</h1>
    </div>
  )
}