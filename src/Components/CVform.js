import React from "react";
import "../Styles/CVform.css";

function CVform(props) {
  console.log(props)
  return (
    <form className="cv-form">
      <label>
        Name: <input type="text" value={props.nameF}/>
      </label>
    </form>
  );
}

export default CVform;
