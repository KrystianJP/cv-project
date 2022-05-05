import React from "react";
import GeneralInfo from "./GeneralInfo";
import EducationInfo from "./EducationInfo";
import WorkInfo from "./WorkExperience";
import "../styles/style.css";

class Form extends React.Component {
  render() {
    return (
      <div className="form-container">
        <div className="form">
          <GeneralInfo />
          <EducationInfo />
          <WorkInfo />
        </div>
      </div>
    );
  }
}

export default Form;
