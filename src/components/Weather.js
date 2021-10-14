import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Weather extends React.Component {
  render() {
    return (
      <>
        <Row className='border border-info'>
          <Col >
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>{this.props.forecast.date}</Card.Title>
                <Card.Text>
                  {this.props.forecast.description}
                </Card.Text>
                <Button variant="success">Cool! Weather!</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}

export default Weather;