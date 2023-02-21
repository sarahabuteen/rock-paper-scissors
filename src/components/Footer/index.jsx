import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import RulesModal from '../Rules';

function Footer() {
  const [isModalOpen, toggleModal] = useState(false);
  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col md={12} className="d-flex justify-content-end">
              <button
                type="button"
                className="btn btn-white-outline text-uppercase px-4"
                onClick={() => toggleModal(!isModalOpen)}
              >
                Rules
              </button>
            </Col>
          </Row>
        </Container>
      </footer>
      <RulesModal isModalOpen={isModalOpen} toggleModal={toggleModal} />
    </>
  );
}

export default Footer;
