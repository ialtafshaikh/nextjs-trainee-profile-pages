import axios from "axios";

import CardList from "../components/CardList";
import { employees } from "../constants/endpoints";

export default function Profiles(props) {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Employee List</h1>
      <CardList employees={props.employees} />
    </div>
  );
}

export const getStaticProps = async () => {
  let { data } = await axios(employees);
  data = data.data;

  return {
    props: { employees: [...data] },
  };
};
