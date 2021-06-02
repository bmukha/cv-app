import React, { useState, useEffect } from "react";
import "../Styles/App.css";
import CVresult from "./CVresult";
import CVform from "./CVform";
import Header from "./Header";
import uniqid from "uniqid";

const App = () => {
  const [data, setData] = useState({
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
  });

  useEffect(() => {
    setData((prevData) => {
      return {
        ...prevData,
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
                value: data.firstName,
                onChange: handleChange,
              },
              {
                key: uniqid(),
                labelName: "Last name",
                type: "text",
                name: "lastName",
                value: data.lastName,
                onChange: handleChange,
              },
              {
                key: uniqid(),
                labelName: "E-mail",
                type: "email",
                name: "email",
                value: data.lastName,
                onChange: handleChange,
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
                value: data.schoolName,
                onChange: handleChange,
              },
              {
                key: uniqid(),
                labelName: "Title of study",
                type: "text",
                name: "titleOfStudy",
                value: data.titleOfStudy,
                onChange: handleChange,
              },
              {
                key: uniqid(),
                labelName: "Date of study (from)",
                type: "date",
                name: "dateOfStudyFrom",
                value: data.dateOfStudyFrom,
                onChange: handleChange,
              },
              {
                key: uniqid(),
                labelName: "Date of study (to)",
                type: "date",
                name: "dateOfStudyTo",
                value: data.dateOfStudyTo,
                onChange: handleChange,
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
                value: data.companyName,
                onChange: handleChange,
              },
              {
                key: uniqid(),
                labelName: "Position",
                type: "text",
                name: "positionName",
                value: data.position,
                onChange: handleChange,
              },
              {
                key: uniqid(),
                labelName: "Main tasks",
                type: "text",
                name: "mainTasks",
                value: data.lastName,
                onChange: handleChange,
              },
            ],
          },
        ],
      };
    });
  }, []);

  const handleChange = (event) => {
    event.preventDefault();
    setData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleSubmit = (event) => {
    setData((prevData) => {
      return {
        ...prevData,
        valuesSubmitted: true,
      };
    });
    event.preventDefault();

    localStorage.setItem("oldData", JSON.stringify(data));
  };

  const handleEdit = (event) => {
    event.preventDefault();
    if (!data.valuesSubmitted) return;

    const restoredData = JSON.parse(window.localStorage.getItem("oldData"));

    if (restoredData) {
      setData(restoredData);
    }
  };

  return (
    <div className="App">
      <Header />
      <CVform
        onSubmit={handleSubmit}
        onEdit={handleEdit}
        fieldsets={data.fieldsets}
      />
      <CVresult data={data} />
    </div>
  );
};
export default App;
