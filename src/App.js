import React from 'react';
import axios from 'axios';
import Map from './components/Map'
import LatLon from './components/LatLon'
import Error from './components/Error'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: '',
      locationObj: {},
      mapImg: {},
      errorCode: '',
      errorAlert: false,
    }
  }

  getLocation = async (event) => {
    event.preventDefault();
    console.log('button clicked.')
    console.log(process.env.REACT_APP_API_KEY);

    let URL = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_API_KEY}&q=${this.state.cityName}&format=json`;
    console.log(URL);

    let mapURL = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_API_KEY}&center=${this.state.locationObj.lat},${this.state.locationObj.lon}&zoom=18&size=500x500&format=jpeg`;

    console.log(mapURL);

    // Try & Axios Get Request
    try {
      let locData = await axios.get(URL);

      let mapImg = await axios.get(mapURL);


      // Response obj.data
      console.log(locData.data[0]);
      // Set it to state
      this.setState({ locationObj: locData.data[0] })
      console.log(this.state.locationObj);
      this.setState({ mapImg })
      console.log('lat:', this.state.locationObj.lat)
      console.log('lon:', this.state.locationObj.lon)
    }

    catch (error) {
      console.log('There was an error:', error, `Type: ${typeof (error.message)}`);
      // Error needs to be error.message to get the error as a string.
      this.setState({ errorCode: error.message });
      this.setState({ errorAlert: true });
    }
  }

  onErrorClose = () => {
    this.setState({ errorAlert: false });
    console.log('onErrorClose: ', this.state.onErrorClose);
  }

  render() {
    console.log(this.state.mapImg);
    return (
      <>
        <h1>Enter A City</h1>
        <h3>{this.state.cityName}</h3>
        <input onChange={(event) => this.setState({ cityName: event.target.value })}>
        </input>
        <button onClick={this.getLocation}>Explore!</button>
        {
          this.state.locationObj.display_name &&
          <div>
            <h2>City Found: {this.state.locationObj.display_name}</h2>
            <LatLon locationObj={this.state.locationObj} />
            <Map mapImg={this.state.mapImg} />
            <Error
              errorCode={this.state.errorCode}
              errorAlert={this.state.errorAlert}
              onErrorClose={this.onErrorClose}
            // The last one here is passing a FUNCTION down as PROPS
            />
          </div>
        }
      </>
    );
  }
}

export default App;
