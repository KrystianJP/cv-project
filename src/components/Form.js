import React from "react";
import GeneralInfo from "./GeneralInfo";
import EducationInfo from "./EducationInfo";
import WorkInfo from "./WorkExperience";
import "../styles/style.css";

const Form = (props) => {
  return (
    <div className="form-container">
      <div className="form">
        <GeneralInfo changeValues={props.changeValues} />
        <EducationInfo changeValues={props.changeValues} />
        <WorkInfo changeValues={props.changeValues} />
      </div>
    </div>
  );
};

export default Form;
