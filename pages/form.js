import { Component } from "react";

// endpoints
import { addEmployee } from "../constants/endpoints";

// styles
import FormElements from "../components/FormElements";
import FormElementStyles from "../styles/Form.module.css";

//component to add employee form
function AddEmployeeForm() {
  //add new employee details from form
  const submitForm = (event) => {
    event.preventDefault();
    let form = event.target;
    let formObj = new FormData();
    formObj.append("firstName", form.firstName.value);
    formObj.append("lastName", form.lastName.value);
    formObj.append("company", form.company.value);
    formObj.append("email", form.email.value);
    formObj.append("contact", form.contact.value);
    formObj.append("imageUrl", form.imageUrl.files[0]);
    formObj.append("skills", form.skills.value.split(","));
    formObj.append("altDescription", form.altDescription.value);
    formObj.append("hobbies", form.hobbies.value.split(","));
    formObj.append("gitHub", form.gitHub.value);
    formObj.append("linkedIn", form.linkedIn.value);
    formObj.append("website", form.website.value);

    fetch(addEmployee, {
      method: "POST",
      mode: "cors",
      body: formObj,
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        form.reset();
        alert("Form Submitted Successfully");
        console.log(data);
      })
      .catch((err) => {
        alert(`${form.firstName.value}, Please try again :)`);
        alert(err);
        console.log(err);
      });
  };
  //markup for add employee form
  return (
    <div className={FormElementStyles.container}>
      <form onSubmit={submitForm}>
        <FormElements />
        <div className={FormElementStyles.buttons}>
          <button
            type="submit"
            value="submit"
            className={FormElementStyles.button}
          >
            Submit
          </button>
          &nbsp;&nbsp;
          <button
            type="reset"
            value="Reset"
            className={FormElementStyles.button}
          >
            Reset
          </button>
        </div>
      </form>
      <style jsx>{`
        button {
          font-size: 20px;
          align-items: center;
          padding: 10px;
          color: white;
          background-color: black;
          border: none;
        }
      `}</style>
    </div>
  );
}
export default AddEmployeeForm;
