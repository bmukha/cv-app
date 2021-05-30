import React from "react";
import "../Styles/CVform.css";
import Fieldset from "./Fieldset";
import uniqid from "uniqid"

const CVform = (props) => {
  // console.log("props received by CVform", props);

  const fieldsetsToRender = props.fieldsets.map((item) => {
    return (
      <Fieldset legendName={item.fieldsetName} inputs={[...item.inputs]} key={uniqid()}/>
    );
  });
// console.log(fieldsetsToRender)

  return (
    <form className="cv-form" onSubmit={props.handleSubmit}>
      {fieldsetsToRender}
      <input type="submit" value="Submit" />
    </form>
  );
};

export default CVform;
