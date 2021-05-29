import React from "react";
import "../Styles/CVform.css";

function CVform(props) {
  return (
    <form className="cv-form">
      <label>
        First name: <input 
        type="text" 
        name="firstName"
        value={props.firstName} 
        onChange={props.handleChange}/>
      </label>
    </form>
  );
}

export default CVform;
