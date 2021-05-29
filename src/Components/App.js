import React, { Component } from "react";
import "../Styles/App.css";
import CVresult from "./CVresult";
import CVform from "./CVform";
import Header from "./Header";
class App extends Component {
  constructor() {
    super();
    this.state = {
      nameF: "nobody",
    };
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Header />
        <CVresult nameF={this.state.nameF}/>
        <CVform nameF={this.state.nameF}/>
      </div>
    );
  }
}

export default App;
