import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class LatLon extends React.Component {
  render() {
    return (
      <>
        <Row className='border border-info'>
          <Col><h4>Lat: {this.props.locationObj.lat}</h4></Col>
          <Col><h4>Lon: {this.props.locationObj.lon}</h4></Col>
        </Row>
      </>
    );
  }
}

export default LatLon;
