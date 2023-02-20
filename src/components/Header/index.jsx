import React, { useContext } from 'react';
import { Container, Row, Col } from 'reactstrap';
import logo from '../../assets/images/logo.svg';
import { GameContext } from '../../context';

function Header() {
  const { state } = useContext(GameContext);
  return (
    <header>
      <Container>
        <Row className="d-flex justify-content-center">
          <Col md={9}>
            <div className="wrapper d-flex justify-content-between">
              <img src={logo} alt="logo" />
              <div className="score-card d-flex flex-column justify-content-center align-items-center">
                <h6 className="text-blue text-uppercase text-center mb-0">Score</h6>
                <h1 className="text-gray text-center mb-0 fw-bold">{state?.score}</h1>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
