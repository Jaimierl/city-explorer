import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardGroup from 'react-bootstrap/CardGroup'

class WeatherDay extends React.Component {

  render() {
    return (
      <>
        <CardGroup>
          <Card style={{ width: '18rem' }} className='bg bg-primary m=3'>
            <Card.Body>
              <Card.Title>{this.props.date}</Card.Title>
              <Card.Text>
                {this.props.description}
              </Card.Text>
              <Button variant="light">Cool! Weather!</Button>
            </Card.Body>
          </Card>
        </CardGroup>
      </>
    );
  }
}

export default WeatherDay;