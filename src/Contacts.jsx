import React from 'react';
import { Card, Row, Col } from 'react-bootstrap'; 
import './Contact.css'

function Contacts() {
  return (
    <div>
      <h1 className='contact-h1'>How to contact me</h1>
      
      <Row className="mt-4">
        <Col md={4}>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Facebook:</Card.Title>
              <Card.Text>
              Francine Mae Artana Navarrete 
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Email:</Card.Title>
              <Card.Text>
              fmnavarrete@gbox.ncf.edu.ph 
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Contact Number:</Card.Title>
              <Card.Text>
              0967779029
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      
    </div>
  );
}

export default Contacts;
