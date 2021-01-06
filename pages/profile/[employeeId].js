import axios from "axios";

import { getEmployeeById, employees } from "../../constants/endpoints";

function EmployeeDetail(props) {
  return <div></div>;
}

export const getStaticProps = async (context) => {
  console.log(context);
  let { data } = await axios(getEmployeeById + context.params.employeeId);
  data = data.data;

  return {
    props: { employee: [...data] },
  };
};

export async function getStaticPaths() {
  let { data } = await axios(employees);
  data = data.data;
  let paths = data.map((employee) => ({
    params: {
      employeeId: `${employee.employeeId}`,
    },
  }));
  return {
    paths,
    fallback: false, // See the "fallback" section below
  };
}

export default EmployeeDetail;
