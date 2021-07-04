import ProgressBar from "react-bootstrap/ProgressBar";
import { Col } from "react-bootstrap";

export const Conocimientos = (porps) => {
  const {
    skill: { nivel, nombre },
  } = porps;
  return (
    <>
      <Col as="li" className="align-items-center d-flex">
        {nombre}
      </Col>
      <Col as="li" className="align-items-center d-flex ">
        <ProgressBar className="col p-0 ml-2" xs="11" now={10 * nivel} />
      </Col>
    </>
  );
};
