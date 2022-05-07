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
          <GeneralInfo changeValues={this.props.changeValues} />
          <EducationInfo changeValues={this.props.changeValues} />
          <WorkInfo changeValues={this.props.changeValues} />
        </div>
      </div>
    );
  }
}

export default Form;
