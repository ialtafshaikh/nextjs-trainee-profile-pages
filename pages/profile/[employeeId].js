import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

import { getEmployeeById, employees } from "../../constants/endpoints";

import detail from "../../styles/CardDetail.module.css";

import { AiTwotoneMail, AiFillShop } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import { GiSkills } from "react-icons/gi";
import { CgBoy } from "react-icons/cg";
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";
import { AiOutlineArrowLeft } from "react-icons/ai";

function EmployeeDetail(props) {
  const employee = props.employee;
  const router = useRouter();

  return router.isFallback ? (
    <p>Loading..</p>
  ) : (
    <>
      <div className={detail.box} key={employee.employeeId}>
        <div className={detail.details}>
          <div>
            <img src={employee.imageUrl} alt={employee.firstName} />
          </div>
          <div>
            <br />
            <br />
            <h1 className={detail.detailh1}>
              {employee.firstName} {employee.lastName}
            </h1>
            <br />
            <br />
            <br />
            <AiFillShop /> <span className={detail.cardspan}>Company : </span>
            {employee.company}
            <br />
            <br />
            <AiTwotoneMail /> <span className={detail.cardspan}>Email : </span>
            {employee.email}
            <br />
            <br />
            <GiSkills /> <span className={detail.cardspan}>Skills : </span>
            {employee.skills.map((skill) => {
              return <span className={detail.skills}>{skill}</span>;
            })}
            <br />
            <br />
            <CgBoy /> <span className={detail.cardspan}> Hobbies : </span>
            {employee.hobbies.map((hobby) => {
              return <span className={detail.skills}>{hobby}</span>;
            })}{" "}
            <br />
            <br />
          </div>
        </div>
        <div className={detail.content}>
          <br />
          <br />
          <FcAbout />
          <span className={detail.cardspan}> About : </span>
          {employee.altDescription}
          <p className={detail.socialList}>
            <a href={employee.socialLinks[0].gitHub}>
              <FaGithub size="2em" />
            </a>

            <a href={employee.socialLinks[0].linkedIn}>
              <FaLinkedin size="2em" color="#0e76a8" />
            </a>

            <a href={employee.socialLinks[0].website}>
              <FaGlobe size="2em" color=" #495e7b" />
            </a>
          </p>
          <p className={detail.back}>
            <Link href="/profiles">
              <a>
                <AiOutlineArrowLeft size="2em" />
              </a>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async (context) => {
  let { data } = await axios(getEmployeeById + context.params.employeeId);
  data = data.data[0];
  return {
    props: { employee: { ...data } },
  };
};

export const getStaticPaths = async () => {
  let { data } = await axios(employees);
  data = data.data;
  let paths = data.map((employee) => ({
    params: {
      employeeId: employee.employeeId,
    },
  }));

  return {
    paths,
    fallback: true,
  };
};

export default EmployeeDetail;
