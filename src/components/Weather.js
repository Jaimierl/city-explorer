import React from 'react';
import Col from 'react-bootstrap/Col'
import WeatherDay from './WeatherDay'

class Weather extends React.Component {
  render() {
    let forecastLookahead = this.props.forecastData.map((dailyWeather, idx) =>
      <WeatherDay
        data={dailyWeather.date}
        description={dailyWeather.description}
        key={idx}
      />)

    return (
      <>
        <Col className='border border-info d-flex justify-content-center'>
          
            {forecastLookahead}
          
        </Col>
      </>
    );
  }
}

export default Weather;