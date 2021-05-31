import React, { Component } from "react";
import "../Styles/App.css";
import CVresult from "./CVresult";
import CVform from "./CVform";
import Header from "./Header";
import uniqid from "uniqid";
class App extends Component {
  constructor() {
    super();
    this.state = {
      valuesSubmitted: false,
      firstName: "",
      lastName: "",
      email: "",
      schoolName: "",
      titleOfStudy: "",
      dateOfStudyFrom: "",
      dateOfStudyTo: "",
      companyName: "",
      positionName: "",
      mainTasks: "",
      fieldsets: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  componentDidMount() {
    this.setState({
      fieldsets: [
        {
          key: uniqid(),
          fieldsetName: "General information",
          inputs: [
            {
              key: uniqid(),
              labelName: "First name",
              type: "text",
              name: "firstName",
              value: this.state.firstName,
              onChange: this.handleChange,
            },
            {
              key: uniqid(),
              labelName: "Last name",
              type: "text",
              name: "lastName",
              value: this.state.lastName,
              onChange: this.handleChange,
            },
            {
              key: uniqid(),
              labelName: "E-mail",
              type: "email",
              name: "email",
              value: this.state.lastName,
              onChange: this.handleChange,
            },
          ],
        },
        {
          key: uniqid(),
          fieldsetName: "Educational expirience",
          inputs: [
            {
              key: uniqid(),
              labelName: "School name",
              type: "text",
              name: "schoolName",
              value: this.state.schoolName,
              onChange: this.handleChange,
            },
            {
              key: uniqid(),
              labelName: "Title of study",
              type: "text",
              name: "titleOfStudy",
              value: this.state.titleOfStudy,
              onChange: this.handleChange,
            },
            {
              key: uniqid(),
              labelName: "Date of study (from)",
              type: "date",
              name: "dateOfStudyFrom",
              value: this.state.dateOfStudyFrom,
              onChange: this.handleChange,
            },
            {
              key: uniqid(),
              labelName: "Date of study (to)",
              type: "date",
              name: "dateOfStudyTo",
              value: this.state.dateOfStudyTo,
              onChange: this.handleChange,
            },
          ],
        },
        {
          key: uniqid(),
          fieldsetName: "Practical expirience",
          inputs: [
            {
              key: uniqid(),
              labelName: "Company Name",
              type: "text",
              name: "companyName",
              value: this.state.companyName,
              onChange: this.handleChange,
            },
            {
              key: uniqid(),
              labelName: "Position",
              type: "text",
              name: "positionName",
              value: this.state.position,
              onChange: this.handleChange,
            },
            {
              key: uniqid(),
              labelName: "Main tasks",
              type: "text",
              name: "mainTasks",
              value: this.state.lastName,
              onChange: this.handleChange,
            },
          ],
        },
      ],
    });
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    this.setState({
      valuesSubmitted: true,
    });
    event.preventDefault();

    localStorage.setItem("oldState", JSON.stringify(this.state));
  }

  handleEdit(event) {
    event.preventDefault();
    if (!this.state.valuesSubmitted) return;

    const restoredState = JSON.parse(window.localStorage.getItem("oldState"));

    if (restoredState) {
      this.setState(restoredState);
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <CVform
          onSubmit={this.handleSubmit}
          onEdit={this.handleEdit}
          fieldsets={this.state.fieldsets}
        />
        <CVresult data={this.state} />
      </div>
    );
  }
}

export default App;
