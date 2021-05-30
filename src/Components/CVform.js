import React from "react";
import "../Styles/CVform.css";
import Fieldset from "./Fieldset";

const CVform = (props) => {
  console.log("props received by CVform", props);

  const fieldsetsToRender = props.fieldsets.map((item) => {
    return (
      <Fieldset legendName={item.fieldsetName} inputs={[...item.inputs]} />
    );
  });

  return (
    <form className="cv-form" onSubmit={props.handleSubmit}>
      {fieldsetsToRender}
      <input type="submit" value="Submit" />
    </form>
  );
};

export default CVform;
