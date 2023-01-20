import React from "react";
import { useState } from "react";
import "../styles/MiniCollapse.css";
//import starregular from "../assets/starregular.svg";

const Minicollapse = ({ mot, definition }) => {
  const [open, setOpen] = useState(false);
  const toogle = () => {
    setOpen(!open);
  };
  return (
    <div className="minicollapse">
      <div className="mot" onClick={toogle}>
        {mot}
        {/* <img src={starregular} alt="blue field"  /> */}
      </div>
      {open && <div className="definition"> {definition} </div>}
    </div>
  );
};

export default Minicollapse;
