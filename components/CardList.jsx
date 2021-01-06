import React, { Component } from "react";

// components
import Card from "./Card";

//styles
import cardStyle from "../styles/Card.module.css";

import { employees } from "../constants/endpoints";

export default class CardList extends Component {
  state = {
    employees: [],
  };

  componentDidMount = () => {
    fetch(employees)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({ employees: data.data });
      });
  };

  render() {
    return (
      <div className={cardStyle.cardContainer}>
        {this.state.employees.map((employee) => {
          return <Card employee={employee} key={employee.employeeId} />;
        })}
      </div>
    );
  }
}
