import React, { Component } from "react";
import "../Styles/App.css";
import CVresult from "./CVresult";
import CVform from "./CVform";
import Header from "./Header";
import uniqid from "uniqid"
class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("Submitted");
  }

  render() {
    const fieldsets = [
      {
        id: uniqid(),
        fieldsetName: "General information",
        inputs: [
          {
            id: uniqid(),
            labelName: "First name",
            type: "text",
            name: "firstName",
            value: this.state.firstName,
            onChange: this.handleChange,
          },
          {
            id: uniqid(),
            labelName: "Last name",
            type: "text",
            name: "lastName",
            value: this.state.lastName,
            onChange: this.handleChange,
          },
          {
            id: uniqid(),
            labelName: "E-mail",
            type: "email",
            name: "email",
            value: this.state.lastName,
            onChange: this.handleChange,
          },
        ],
      },
    ];

    return (
      <div className="App">
        <Header />
        <CVresult />
        <CVform fieldsets={fieldsets} />
      </div>
    );
  }
}

export default App;
