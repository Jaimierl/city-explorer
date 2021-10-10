import React from 'react';
// import Img from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Map extends React.Component {
  render() {
    console.log(this.props);
    return (
      <>
        <Row className='border border-info'>
          <Col>
            <img src={this.props.mapImg} alt='Map of Your City' />
          </Col>
        </Row>
      </>
    );
  }
}

export default Map;