import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import CardGroup from 'react-bootstrap/CardGroup'
import Col from 'react-bootstrap/Col'

class MovieSingles extends React.Component {

  render() {
    return (
      <>
        <Col className='bg bg-secondary'>
          <CardGroup style={{ width: '20rem', height: '50rem', overflow: 'auto' }}>
            <Card className='bg bg-primary
          m-3'>
              <Card.Img
                variant="top" src={this.props.image_url} />
              <Card.Body>
                <Card.Title>{this.props.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted card text-white">Released On: {this.props.released_on}</Card.Subtitle>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Average Votes:{this.props.average_votes}</ListGroupItem>
                <ListGroupItem>Total Votes:{this.props.total_votes}</ListGroupItem>
                <ListGroupItem>Popularity: {this.props.popularity}</ListGroupItem>
              </ListGroup>
              <Card.Text className='fw-bold'>Overview:
                {this.props.overview}
              </Card.Text>
              <Card.Body>
                <Button variant="light">Cool! Movies!</Button>
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>
      </>
    );
  }
}

export default MovieSingles;