import React from "react";
import "../styles/style.css";

class GeneralInfo extends React.Component {
  render() {
    return (
      <div className="input-section">
        <h2>General</h2>
        <div className="input-container">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => {
              this.props.changeValues(e.target.value, "name");
            }}
          ></input>
        </div>
        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => {
              this.props.changeValues(e.target.value, "email");
            }}
          ></input>
        </div>
        <div className="input-container">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            pattern="^(?:0|\(?\+33\)?\s?|0033\s?)[1-79](?:[\.\-\s]?\d\d){4}$"
            onChange={(e) => {
              this.props.changeValues(e.target.value, "phone");
            }}
          ></input>
        </div>
      </div>
    );
  }
}

export default GeneralInfo;
