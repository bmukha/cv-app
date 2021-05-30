import React from "react";
import Input from "./Input";

const Fieldset = (props) => {
  console.log("props received by Fieldset", props);
  const inputsToRender = props.inputs.map((item) => {
    return (
      <Input
        id={item.id}
        labelName={item.labelName}
        type={item.type}
        name={item.name}
        onChange={item.onChange}
        value={item.value}
      />
    );
  });
  return (
    <fieldset>
      <legend>{props.legendName}</legend>
      {inputsToRender}
    </fieldset>
  );
};

export default Fieldset;
