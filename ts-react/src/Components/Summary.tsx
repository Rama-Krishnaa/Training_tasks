// import React from 'react'
// type IProps = {
//     colors: string[]
// }
// export default function Summary(props:IProps) {
//   return (
//     <div>
//        {
//          props.colors.map((c: string,index:number)=>

//                 <li key={index} >{c}</li>

//          )
//        }
//     </div>
//   )
// }

import React from "react";
type IProps = {
  index: number;
  name: string;
  printNameCallback: (data: string) => void;
};
export default function Summary(props: IProps) {
  return (
    <>
      <td>{props.index}</td>
      <td>{props.name}</td>
      <td>
        <button onClick={() => props.printNameCallback(props.name)}>
          Print Name
        </button>
      </td>
    </>
  );
}
