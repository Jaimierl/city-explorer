import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Weather extends React.Component {
  render() {
    return (
      <>
        <Col className='border border-info'>

          <Card style={{ width: '18rem' }} className='bg bg-primary'>
            <Card.Body>
              <Card.Title>{this.props.weatherArrayElement.date}</Card.Title>
              <Card.Text>
                {this.props.weatherArrayElement.description}
              </Card.Text>
              <Button variant="light">Cool! Weather!</Button>
            </Card.Body>
          </Card>

        </Col>
      </>
    );
  }
}

export default Weather;