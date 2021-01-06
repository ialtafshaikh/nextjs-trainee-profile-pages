import { getEmployeeById } from "../../constants/endpoints";

function EmployeeDetail(props) {
  return <div></div>;
}

export const getStaticProps = async (context) => {
  let { data } = await axios(getEmployeeById + context.params.employeeId);
  data = data.data;

  return {
    props: { employee: [...data] },
  };
};

export default EmployeeDetail;
