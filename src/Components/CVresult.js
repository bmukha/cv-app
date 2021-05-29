import React from "react";
import "../Styles/CVresult.css";

function CVresult(props) {
  console.log(props)
  return (
    <div className="cv-result">
      <h1>{props.nameF}</h1>
    </div>
  );
}

export default CVresult;
