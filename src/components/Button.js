import React from "react";
import "./button.css";
import { CgArrowUp, CgArrowDown } from "react-icons/cg";

export default function Button(props) {
  return (
    <div className="main__button">
      <div className="round" key="1" onClick={props.clickUp}>
        <CgArrowUp />
      </div>
      <div className="round" key="2" onClick={props.clickDown}>
        <CgArrowDown />
      </div>
    </div>
  );
}
