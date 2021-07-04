import { useState } from "react";
import { Col, Row, Button } from "react-bootstrap";
import { Conocimientos } from "./Conocimientos";
import { GrLinkedin, GrGithub } from "react-icons/gr";
export const Curriculum = () => {
  const [skills, setSkills] = useState([
    {
      nombre: "HTML",
      nivel: 9,
    },
    {
      nombre: "CSS",
      nivel: 8,
    },
    {
      nombre: "JavaScript",
      nivel: 8,
    },
    {
      nombre: "Bootstrap",
      nivel: 7,
    },
    {
      nombre: "React",
      nivel: 7,
    },
    {
      nombre: "Node",
      nivel: 6,
    },
    {
      nombre: "Mysql",
      nivel: 7,
    },
  ]);
  return (
    <Col as="div" xs="12">
      <Row as="ul" className="p-4">
        <Col as="li" md="4" className="imagen-descarga">
          <img src="img/yo.png" alt="img" className="img-cv" />
          <a
            href="descarga/cv.pdf"
            className="btn descarga"
            download="Curriculum Jose Maria Zamora Perez"
          >
            Descargar curriculum
          </a>{" "}
          <div className="webs-descarga">
            <a
              href="https://es.linkedin.com/in/jose-maria-zamora?trk=profile-badge"
              target="_blank"
              rel="noreferrer"
            >
              <GrLinkedin className="webs" />
            </a>
            <a
              href="https://github.com/josemariaz1995"
              target="_blank"
              rel="noreferrer"
            >
              <GrGithub className="webs" />
            </a>
          </div>
        </Col>
        <Col>
          <Row className="conocimientos" as="ul">
            {skills.map((skill, indice) => (
              <Conocimientos skill={skill} key={indice} />
            ))}
          </Row>
        </Col>
      </Row>
    </Col>
  );
};
