import { Row } from "react-bootstrap";

export const Proyecto = (props) => {
  const { proyecto } = props;
  return (
    <Row className="slide m-0" style={{ backgroundColor: proyecto }}></Row>
  );
};
