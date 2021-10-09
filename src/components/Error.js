import React from 'react';
import Alert from 'react-bootstrap/Alert'


class Error extends React.Component {

  render() {
    console.log('this.props', this.props);
    return (
      <>
        {(this.props.errorAlert) ?
          <Alert variant="danger" onClose={this.props.onErrorClose} dismissable>
            <Alert.Heading> Oh No! You Got an Error!</Alert.Heading>
            <p>{this.props.errorCode}</p>
          </Alert>
          : ''
        }
      </>
    );
  }
}

export default Error;