import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: '',
      locationObj: {},
      // mapImg: ''
    }
  }

  getLocation = async (event) => {
    event.preventDefault();
    console.log('button clicked.')
    console.log(process.env.REACT_APP_API_KEY);

    let URL = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_API_KEY}&q=${this.state.cityName}&format=json`;
    console.log(URL);

    // let cityMap = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_API_KEY}&center=${this.state.locationObj.lat},${this.state.locationObj.lon}&zoom=18&size=500x500&format=jpeg`;
    // console.log(cityMap);

    // Try & Axios Get Request
    try {
      let locData = await axios.get(URL);

      // let mapData = await axios.get(cityMap);
      // let mapImg = mapData.config.url;

      // Response obj.data
      console.log(locData.data[0]);
      // Set it to state
      this.setState({ locationObj: locData.data[0] })
      console.log(this.state.locationObj);
      // this.setState({ mapImg })
      console.log('lat:', this.state.locationObj.lat)
      console.log('lon:', this.state.locationObj.lon)
    }

    catch (error) {
      console.log('There was an error:', error);
    }
  }


  render() {
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
            <h4>Lat: {this.state.locationObj.lat}</h4>
            <h4>Lon: {this.state.locationObj.lon}</h4>
            <img src={this.state.mapImg} alt="Map" />
          </div>
        }
      </>
    );
  }
}

export default App;
