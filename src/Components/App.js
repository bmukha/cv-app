import React, { Component } from "react";
import "../Styles/App.css";
import CVresult from "./CVresult";
import CVform from "./CVform";
import Header from "./Header";
class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
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
        fieldsetName: "GenIf2021",
        inputs: [
          {
            type: "text",
            name: "firstName",
            value: this.state.firstName,
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
