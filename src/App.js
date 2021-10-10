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
      mapURL: '',
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



    // Try & Axios Get Request

    try {
      let locData = await axios.get(URL);
      // console.log(locData);



      // // Response obj.data
      // console.log(locData.data[0]);
      // console.log(this.state.locationObj);
      // // Set it to state
      this.setState({ locationObj: locData.data[0] })
      // console.log(this.state.locationObj)

      // console.log('lat:', this.state.locationObj.lat)
      // console.log('lon:', this.state.locationObj.lon)


      // This is where we want to create the Map Url. It NEEDS to be underneath the locationObj set State.

      let mapURL = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_API_KEY}&center=${this.state.locationObj.lat},${this.state.locationObj.lon}&zoom=10`;

      // let mapImg = await axios.get(mapURL);
      this.setState({ mapURL })
      console.log(mapURL);
      // <img src='https://maps.locationiq.com/v3/staticmap?key=pk.e097a80bb405d0fda0b24c0d68c5ced0&center=32.7762719,-96.7968559'>
      // Name	Description	Required	Values
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
            <Map mapImg={this.state.mapURL} />
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
