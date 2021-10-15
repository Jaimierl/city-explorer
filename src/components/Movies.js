import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

class Movies extends React.Component {
  render() {
    return (
      <>
        <Col className='bg bg-secondary'>

          <Card style={{ width: '18rem', height: '80rem' }} className='bg bg-primary
          m-3'>
            <Card.Img
              variant="top" src={this.props.movieArrayElement.image_url} />
            <Card.Body>
              <Card.Title>{this.props.movieArrayElement.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Released On: {this.props.movieArrayElement.released_on}</Card.Subtitle>
              <Card.Text className='fw-bold'>Overview:
                {this.props.movieArrayElement.overview}
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Average Votes:{this.props.movieArrayElement.average_votes}</ListGroupItem>
              <ListGroupItem>Total Votes:{this.props.movieArrayElement.total_votes}</ListGroupItem>
              <ListGroupItem>Popularity: {this.props.movieArrayElement.popularity}</ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Button variant="light">Cool! Movies!</Button>
            </Card.Body>
          </Card>

        </Col>
      </>
    );
  }
}

export default Movies;