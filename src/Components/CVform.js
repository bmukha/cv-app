import React from "react";
import "../Styles/CVform.css";
import Fieldset from "./Fieldset";
import "../Styles/Buttons.css"

const CVform = (props) => {
  const fieldsetsToRender = props.fieldsets.map((item) => {
    return (
      <Fieldset
        key={item.key}
        legendName={item.fieldsetName}
        inputs={[...item.inputs]}
      />
    );
  });

  return (
      <form className="cv-form" onSubmit={props.onSubmit}>
        {fieldsetsToRender}
        <div className="buttons">
          <button className="btn" onClick={props.onEdit}>Edit</button>
          <input className="btn" type="submit" value="Submit" />
        </div>
      </form>
  );
};

export default CVform;
