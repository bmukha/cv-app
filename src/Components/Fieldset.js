import React from "react";
import Input from "./Input"

const Fieldset = (props) => {
    console.log("props received by Fieldset", props)
  return (
    <p>This is fieldset</p>
    // <fieldset>
    //   <legend>{props.legendName}</legend>
    //   <Input labelName="Gen Inf"/>
    // </fieldset>
  );
};

export default Fieldset