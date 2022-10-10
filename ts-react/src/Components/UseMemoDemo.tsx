import { count } from "console";
import React, { useMemo, useState } from "react";

function UseMemoDemo() {
  const [counterOne, seCounterOne] = useState<number>(0);
  const [counterTwo, setCounterTwo] = useState<number>(0);

  const handleCounterOne = () => {
    seCounterOne((prevCount) => prevCount + 1);
  };

  const handleCounterTwo = () => {
    setCounterTwo((prevCount) => prevCount + 1);
  };
//   setTimeout(() => {
//   }, 2000);

  const isEven = useMemo(() => {
    let i=0;
    while(i<2000000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div>
      <button onClick={handleCounterOne}>ConterOne:{counterOne}</button>
      <span>{isEven ? "Even" : "Odd"}</span>
      <br />
      <button onClick={handleCounterTwo}>ConterTwo:{counterTwo}</button>
    </div>
  );
}

export default UseMemoDemo;
