import React from "react";
import GeneralInfo from "./GeneralInfo";
import EducationInfo from "./EducationInfo";
import "../styles/style.css";

class Form extends React.Component {
  render() {
    return (
      <div className="form-container">
        <div className="form">
          <GeneralInfo />
          <EducationInfo />
        </div>
      </div>
    );
  }
}

export default Form;
