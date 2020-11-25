import React from 'react'
import MovieCard from '../Movie Card Component/MovieCard'
import './MoviesList.css'

export default function MoviesList(props) {
   

    
    return (
        <div className="movieslist-container">
            {
                props.movies.map((movie)=> <MovieCard key={movie.id} movie={movie} rate={props.rate}/>)
            }
        </div>
    )
}
