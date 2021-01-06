// components
import Card from "./Card";

//styles
import cardStyle from "../styles/Card.module.css";

function CardList(props) {
  return (
    <div className={cardStyle.cardContainer}>
      {props.employees.map((employee) => {
        return <Card employee={employee} key={employee.employeeId} />;
      })}
    </div>
  );
}

export default CardList;
