import React from "react";
import "../Styles/CVresult.css";

function CVresult(props) {
  return (
    <div className="cv-result">
      <p>First name: {props.firstName}</p>
    </div>
  );
}

export default CVresult;
