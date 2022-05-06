import React from "react";
import Form from "./components/Form";
import "./styles/style.css";
import Cv from "./components/Cv";

class App extends React.Component {
  #classes = {
    name: "name",
  };

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
        cvClassName += " cv-" + this.#classes[key];

        result.push(
          <li key={key} className={cvClassName}>
            {this.state[key]}
          </li>,
        );
      }
    }
    result = result
      .slice(0, 1)
      .concat(this.getUserImage())
      .concat(result.slice(1));
    return result;
  }

  getUserImage() {
    let image = (
      <img
        key="image"
        src="https://imgs.search.brave.com/wVaCsBwZBwBTc89EXf7S-Ef3xr4UQFVcxhdf1QEkd6U/rs:fit:916:980:1/g:ce/aHR0cDovL2Nkbi5v/bmxpbmV3ZWJmb250/cy5jb20vc3ZnL2lt/Z18yMTAzMTgucG5n"
        className="user-img"
        alt="user"
      ></img>
    );

    return image;
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
