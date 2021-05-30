import React from "react";
import "../Styles/CVform.css";
import Fieldset from "./Fieldset"

const CVform = props => {
  console.log("props received by CVform", props)
  return (
    <p>This is form</p>
    // <form className="cv-form" onSubmit={props.handleSubmit}>
    //   <Fieldset data={fieldsets.inputs[0]} legendName={fieldsets.fieldsetName}/>
    //   <input type="submit" value="Submit" />
    // </form>
  );
}

export default CVform;
