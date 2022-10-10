import React from "react";
import { string } from "yargs";
import Items from "./Movie";

type IProps = {
  items: IItems[];
};

type IItems = {
  imgSrc: string;
  title: string;
  text: string;
};
export default function Card() {
  console.log(Items);
  return (
    <div>
      {Items.map((item: IItems, i: number) => (
        <div key={i}>
          <img src={item.imgSrc} alt="" />
          <h3>{item.title}</h3>
          <h3>{item.text}</h3>
        </div>
      ))}
    </div>
  );
}
