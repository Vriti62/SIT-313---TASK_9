import React from "react";

function InputControl(props) {
  return (
    <div className={""}>
      {props.label && <label>{props.label}</label>}
      <input type={props.type || "text"} {...props} />
    </div>
  );
}

export default InputControl;