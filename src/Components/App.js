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
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <CVresult firstName={this.state.firstName} />
        <CVform firstName={this.state.firstName} handleChange={this.handleChange}/>
      </div>
    );
  }
}

export default App;
