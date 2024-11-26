import React from 'react';
import { Card, Row, Col } from 'react-bootstrap'; 
import './Education.css'

function Education() {
  return (
    <div>
      <h1 className='education-h1'>My Educational Journey</h1>

      <Row className="mt-4">
        <Col md={4}>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Elementary</Card.Title>
              <Card.Text>
              Naga Central School 1 
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>High School</Card.Title>
              <Card.Text>
              Camarines Sur National High School
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>College</Card.Title>
              <Card.Text>
              Naga College Foundation Inc
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
</div>

 
  );
}

export default Education;
