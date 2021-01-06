import Link from "next/link";

import cardStyle from "../styles/Card.module.css";
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";

function Card(props) {
  return (
    <>
      <div className={cardStyle.box}>
        <div>
          <Link href={"/profile/" + props.employee.employeeId}>
            <a>
              <img
                src={props.employee.imageUrl}
                alt={props.employee.firstName}
                className={cardStyle.imgWidth}
              />
              <h1>
                {props.employee.firstName} {props.employee.lastName}
              </h1>
              <p className={cardStyle.title}>{props.employee.company}</p>
            </a>
          </Link>
        </div>
        <div className={cardStyle.linkStyle}>
          <p className={cardStyle.links}>
            <a href={props.employee.socialLinks[0].gitHub}>
              <FaGithub size="2em" />
            </a>
            <a href={props.employee.socialLinks[0].linkedIn}>
              <FaLinkedin size="2em" color="#0e76a8" />
            </a>
            <a href={props.employee.socialLinks[0].website}>
              <FaGlobe size="2em" color=" #495e7b" />
            </a>
          </p>
        </div>
      </div>
      <style jsx>{`
        a {
          text-decoration: none;
        }
        h1 {
          margin-bottom: 10px;
          text-align: center;
        }
        p {
          text-align: center;
        }
      `}</style>
    </>
  );
}

export default Card;
