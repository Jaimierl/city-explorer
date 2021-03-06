import React from 'react';
import Alert from 'react-bootstrap/Alert'


class Error extends React.Component {

  render() {
    console.log('this.props', this.props);
    return (
      <>

        <Alert variant="danger" onClose={this.props.onErrorClose} dismissible>
          <Alert.Heading> Oh No! You Got an Error!</Alert.Heading>
          <p>{this.props.errorCode}</p>
        </Alert>

      </>
    );
  }
}

export default Error;