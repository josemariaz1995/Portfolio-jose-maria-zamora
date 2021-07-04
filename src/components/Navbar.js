import { Col } from "react-bootstrap";
import { BsHouse, BsCodeSlash } from "react-icons/bs";
import { AiOutlineFile } from "react-icons/ai";
import { NavLink } from "react-router-dom";
export const Navbar = () => {
  return (
    <Col className="nav-container">
      <div className="navbar row">
        <Col as="div" className="icono_nav">
          <NavLink to="/Inicio" activeClassName="actual">
            <BsHouse className="icono" />
          </NavLink>
        </Col>
        <Col as="div" className="icono_nav">
          <NavLink to="/Curriculum" activeClassName="actual">
            <AiOutlineFile className="icono" />
          </NavLink>
        </Col>
        <Col as="div" className="icono_nav">
          <NavLink to="/Proyectos" activeClassName="actual">
            <BsCodeSlash className="icono" />
          </NavLink>
        </Col>
      </div>
    </Col>
  );
};
