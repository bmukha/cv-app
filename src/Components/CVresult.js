import React from "react";
import "../Styles/CVresult.css";

const CVresult = (props) => {
  console.log("Props received in CVresult", props);

  if (!props.data.valuesSubmitted) {
    return <div className="cv-result"></div>;
  } else {
    return (
      <div className="cv-result">
        <p>
          Hello, my name is {props.data.firstName} {props.data.lastName}. I am
          aspiring web developer.
        </p>
      </div>
    );
  }
};

export default CVresult;
