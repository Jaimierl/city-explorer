import React from 'react';
import axios from 'axios';
import Map from './components/Map';
import LatLon from './components/LatLon';
import Error from './components/Error';
import Container from 'react-bootstrap/Container';
import Weather from './components/Weather';
import Row from 'react-bootstrap/Row';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: '',
      locationObj: {},
      mapImg: {},
      mapURL: '',
      errorCode: '',
      errorAlert: false,
      forecastData: [],
      showForecastData: false
    }
  }

  getLocation = async (event) => {
    event.preventDefault();
    console.log('button clicked.')
    console.log(process.env.REACT_APP_API_KEY);


    // Try & Axios Get Request
    try {
      // All API calls live in the try. They can be in their own formulas though.

      let URL = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_API_KEY}&q=${this.state.cityName}&format=json`;
      // Query parameters here are Key, q, and format: remember after the ?
      console.log(URL);

      let locData = await axios.get(URL);

      // // Response obj.data
      // console.log(this.state.locationObj);

      // // Set it to state
      this.setState({ locationObj: locData.data[0] })
      // This is where we restrict the data to only one city.

      // This is where we want to create the Map Url. It NEEDS to be underneath the locationObj set State. Its pretty much conditional to info coming back about the city.
      let mapURL = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_API_KEY}&center=${this.state.locationObj.lat},${this.state.locationObj.lon}&zoom=12&size=500x500`;


      this.setState({ mapURL })
      console.log(mapURL);

      // This is where we want the fakeServer Data
      let shapeOfWeather = await axios.get(`http://localhost:3001/weather?partyTown=${this.state.cityName}&lat=${this.state.locationObj.lat}&lon=${this.state.locationObj.lon}`);
      // This here is SENDING the query to the server. SENDING ie request to the server of PartyTown (city) lat, lon.
      // Query parameters here are partytown, lat ,lon

      console.log(shapeOfWeather);
      this.setState({
        forecastData: shapeOfWeather.data,
        showForecastData: true
      })
    }

    catch (error) {
      console.log('There was an error:', error, `Type: ${typeof (error.message)
        }`);
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
      <div className='d-flex justify-content-center' >
        <Container fluid='md' className='p-5 m-3 bg-secondary text-center'>
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
              <Map mapImg={this.state.mapURL} />
              <Row>
                {
                  this.state.showForecastData &&
                  this.state.forecastData.map((weatherArrayElement, idx) => <Weather weatherArrayElement={weatherArrayElement} key={idx} />)
                }
              </Row>
            </div>
          }
          {
            this.state.errorAlert &&
            <Error
              errorCode={this.state.errorCode}
              errorAlert={this.state.errorAlert}
              onErrorClose={this.onErrorClose}
            // The last one here is passing a FUNCTION down as PROPS
            />
          }
        </Container >
      </div >
    );
  }
}

export default App;
