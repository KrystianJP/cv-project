import React from "react";
import Form from "./components/Form";
import "./styles/style.css";
import Cv from "./components/Cv";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.changeValues = this.changeValues.bind(this);
    this.putValuesInList = this.putValuesInList.bind(this);

    this.state = {
      name: null,
      email: null,
      phone: null,
      schoolName: null,
      studyTitle: null,
      studyDate: null,
    };
  }

  changeValues(value, valueName) {
    let newState = {};
    newState[valueName] = value;
    this.setState(newState);
  }

  putValuesInList() {
    let result = [];
    for (let key in this.state) {
      if (this.state.hasOwnProperty(key)) {
        let cvClassName = "cv-text";
        result.push(
          <li key={key} className={cvClassName}>
            {this.state[key]}
          </li>,
        );
      }
    }
    return result;
  }

  render() {
    return (
      <div id="content">
        <header className="heading">CV Project</header>
        <Form changeValues={this.changeValues} />
        <Cv values={this.putValuesInList()} />
      </div>
    );
  }
}

export default App;
