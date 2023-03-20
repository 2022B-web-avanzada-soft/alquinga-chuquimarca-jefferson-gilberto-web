import React from 'react';
import StarRatings from 'react-star-ratings';
import './CardMovie.css';


function CardMovie({ movie }) {
    return (
        <div className="CardMovie">
            <div className="card" style={{ width: "12rem" }}>
                <img className="card-img-top" style={{ height: "18rem" }} src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt="Cover Page " />
                <div className="body-card" style={{ height: "6rem" }}>
                    <div className="text-card">{movie.original_title}</div>
                    <StarRatings
                        className="star-rate"
                        rating={movie.vote_average / 2}
                        starRatedColor="#4DFF00"
                        numberOfStars={5}
                        name='rating'
                        starDimension="1.3rem"
                        starSpacing="0.1rem"
                    />

                </div>
            </div>
        </div>
    );
}

export default CardMovie;