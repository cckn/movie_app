import React from 'react'
import './Movie.css'
import PropTypes from 'prop-types'

function Movie({ title, poster, genres, synopsis }) {
  return (
    <div className="Movie">
      <div className="Movie__Columns">
        <MoviePoster alt={title} poster={poster}/>
      </div>
      <div className="Movie__Columns">
        <h1>{title}</h1>
        <div className="Movie__genres">
          {genres.map((genre, index) => (
            <MovieGenre genre={genre} key={index}/>
          ))}
        </div>
        <p className="Movie__Synopsis">{synopsis}</p>
      </div>
    </div>
  )
}

function MoviePoster({ alt, poster }) {
  return <img alt={alt} src={poster} className="Movie__Poster"/>
}

function MovieGenre({ genre }) {
  return <span className="Movie__Genre">{genre} </span>
}
Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  synopsis: PropTypes.string.isRequired,
}

MoviePoster.propTypes = {
  alt: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
}

MovieGenre.propTypes = {
  genre: PropTypes.string.isRequired,
}

export default Movie
