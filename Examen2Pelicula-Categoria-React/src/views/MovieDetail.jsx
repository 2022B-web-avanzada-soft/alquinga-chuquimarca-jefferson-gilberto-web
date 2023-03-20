import React, { Component } from 'react';
import ApiMoviesService from '../services/ApiMoviesService';
import StarRatings from 'react-star-ratings';
import './MovieDetail.css';


class MovieDetail extends Component {

  constructor(props) {
    super(props);

    this.state = {
      movie: [],
    };

    this.getMovieFromAPI()

  }

  async getMovieFromAPI() {
    const currentMovieId = this.props.match.params.id;
    const dataMovieFromApi = await ApiMoviesService.getMoviesByCategory(currentMovieId);
    this.setState({
      movie: dataMovieFromApi,
    })

  }

  isFiveStarsUndefined() {
    if (this.state.movie.vote_average === undefined) {
      return 0
    } else {
      return this.state.movie.vote_average / 2
    }
  }

  render() {

    const movie = this.state.movie

    return (
      <div className='MovieDetail'>
        <div className='header-photo'
          style={{
            backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie.backdrop_path}')`
          }}>
          <h1 className="film-title">{movie.title}</h1>
          <h6 className="origin-title-date">{movie.original_title} ({movie.release_date})</h6>
          <a className="link-movie" href={movie.homepage} target="_blank" rel="noopener noreferrer">{movie.homepage}</a>
          <div className="rate-stars-movie">
            <StarRatings
              rating={this.isFiveStarsUndefined()}
              starRatedColor="#4DFF00"
              numberOfStars={5}
              name='rating'
              starDimension="2rem"
              starSpacing="0.2rem"
            />
          </div>
        </div>
        <div className="below-description">
          <h4 className="one-sentence-description">{movie.tagline}</h4>
          <h4 className="text-description">{movie.overview}</h4>
        </div>

      </div >
    );

  }
}

export default MovieDetail;