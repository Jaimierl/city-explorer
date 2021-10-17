import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup'


import MovieSingles from './MovieSingles'

class Movies extends React.Component {
  render() {
    let movieMasterList = this.props.movieData.map((movieIndiv, idx) =>
      <MovieSingles
        image_url={movieIndiv.image_url}
        title={movieIndiv.title}
        released_on={movieIndiv.released_on}
        overview={movieIndiv.overview}
        average_votes={movieIndiv.average_votes}
        total_votes={movieIndiv.total_votes}
        popularity={movieIndiv.popularity}
      />)
    return (
      <>

        {movieMasterList}

      </>
    );
  }
}

export default Movies;