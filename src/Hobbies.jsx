import React from 'react';
import { Card, Row, Col } from 'react-bootstrap'; 
import './Hobbies.css'

function Hobbies() {
  return (
    <div>
      <h1 className='hobbies-h1'>My Hobbies</h1>

      <Row className="mt-4">
        <Col md={4}>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Cooking</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Real cooking is more about following your heart than following recipes.</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Watching Movies and TV Shows</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">I love a good Netflix binge! </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Playing Online Games</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Games don't make you violent, lag does.</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Hobbies;
