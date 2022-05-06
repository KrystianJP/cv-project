import React from "react";
import "../styles/style.css";

class Cv extends React.Component {
  render() {
    return (
      <div className="cv">
        <ul>{this.props.values}</ul>
      </div>
    );
  }
}

export default Cv;
