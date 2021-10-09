import React from 'react';
import Img from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Map extends React.Component {
  render() {
    return (
      <>
        <Row classname='border border-info'>
          <Col>
            <Img src={this.props.mapImg} alt='Map of Your City'></Img>
          </Col>
        </Row>
      </>
    );
  }
}

export default Map;