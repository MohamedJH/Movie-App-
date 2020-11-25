import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './MoviesCards.css';

function MovieCard(props) {
  const [stars, setStars] = useState([false, false, false, false, false]);
  const [count, setCount] = useState(1);
  // conteur
  const handleCounteur = () => {
    setCount((prevCount) => {
      return prevCount + 1;
    });
  };
  const [show, setShow] = useState(false)
  const showAlert = () => {
    setShow((prevState) => {
      return !prevState
    })
  }

  

  
  return (
    <div className="movie-container mx-2 my-1">

      <div className="movie-container ">
        <img
          src={props.movie.posterUrl}
          className="card-img-top"
          alt="..."
          style={{ height: '75%' }}
          onClick={() => showAlert()}

        />
        <div className="card-body">
          <h5
            className="card-title text-wrap text-center"
            style={{ fontSize: '17px' }}
          >
            {props.movie.title.toUpperCase()}
          </h5>
        </div>
        <div
          className="card-footer d-flex justify-content-between align-items-center"
          style={{ height: '60px' }}
        >
          <small className="text-muted">
            {stars.map((star, i) => (
              <FontAwesomeIcon
                key={i}
                color={star ? 'yellow' : 'gray'}
                size="lg"
                icon={faStar}
                onClick={() => {
                  handleCounteur()
                  props.rate(props.movie.id, i, [stars, setStars],count);
                }}
              />
            ))}
          </small>
          <button type="button" className="btn btn-outline-secondary text-wrap">
            <span className="badge badge-light">{props.movie.note.toFixed(2)}</span>{' '}
            / 5
          </button>
        </div>
      </div>

      <div className={show ? "movie-description" : 'dismiss'} >
        <strong>Description: </strong>
        <br /> {props.movie.description}
      </div>
    </div>
  );
}
export default MovieCard;
