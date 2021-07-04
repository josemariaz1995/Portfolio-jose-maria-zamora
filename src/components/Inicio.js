import { Col, Row } from "react-bootstrap";
export const Inicio = () => {
  return (
    <Col as="div">
      <Row>
        <Col className="text-center p-4" md="3">
          <img
            className="desktop img-fluid"
            src="img/2597612.jpg"
            alt="guy at desktop"
          />
        </Col>
        <Col className="sobre-mi-info p-4" md="9">
          <h1>Sobre mí</h1>
          <p>
            Programador junior apasionado por el mundo de la programación, en
            busca de una empresa que quiera a una persona flexible, trabajadora
            y que pueda trabajar en equipo.
          </p>
          <p>
            Tengo una FP en diseño de apliciones web y también un bootcamp de
            desarrollo web fullstack con React con más de 280h de duración.
          </p>
          <p>
            Continuamente aprendiendo y adquiriendo nuevas habilidades
            tecnológicas en el campo del diseño y desarrollo de aplicaciones
            web, puedo ocuparme de la parte Front-end y Back-end.
          </p>
        </Col>
      </Row>
    </Col>
  );
};
