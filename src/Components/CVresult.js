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
        <p>
          I've studied {props.data.titleOfStudy} in {props.data.shoolName} from{" "}
          {props.data.dateOfStudyFrom} to {props.data.dateOfStudyTo}
        </p>
        <p>
          My professional expirience includes working in{" "}
          {props.data.companyName} on {props.data.positionName} role. My main
          task were {props.data.mainTasks}.
        </p>
      </div>
    );
  }
};

export default CVresult;
