import React, {useEffect, useState} from "react";
import {Card} from "react-bootstrap";


export default function ChosenMovie({match}){

    const [movie, setMovie] = useState({});

    const fetchMovie = async () => {
        const fetchMovie = await fetch(
            `https://swapi.dev/api/films/${match.params.id}`
        );
        const movie = await fetchMovie.json();
        console.log(movie);
        setMovie(movie)

    }

    useEffect(() => {
        fetchMovie();
        console.log(match);
    }, [])


    return(
        <div>
            <h1> Featured: {movie.title} </h1>
            <p>
                Director: {movie.director}
                Producer: {movie.producer}
                Release date: {movie.release_date}
            </p>
        </div>
    )
}
