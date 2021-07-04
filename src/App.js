import { Col, Row, Container } from "react-bootstrap";
import { Navbar } from "./components/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Inicio } from "./components/Inicio";
import { Curriculum } from "./components/Curriculum";

import { Proyectos } from "./components/Proyectos";

function App() {
  return (
    <>
      <Container as="header" className="container-general px-5 py-3" fluid>
        <Row className="cabecera p-3 mb-3">
          <Col xs="12" as="h1">
            Portfolio
          </Col>
          <Col xs="12" as="div">
            Jose Maria Zamora Pérez
          </Col>
        </Row>

        <Router>
          <Row as="main">
            <Navbar />
            <Col as="div" className="content-container">
              <Row className="content">
                <Switch>
                  <Route path="/Inicio" exact>
                    <Inicio />
                  </Route>
                  <Route path="/Curriculum" exact>
                    <Curriculum />
                  </Route>
                  <Route path="/Proyectos" exact>
                    <Proyectos />
                  </Route>
                  <Route path="/" exact>
                    <Redirect to="/Inicio" />
                  </Route>
                </Switch>
              </Row>
            </Col>
          </Row>
        </Router>
      </Container>
    </>
  );
}

export default App;
