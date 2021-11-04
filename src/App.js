import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect, useState} from "react";
import axios from "axios";
import { Card, Container, ListGroup} from "react-bootstrap";

function App() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get("https://swapi.dev/api/films");
            setMovies(request.data.results);
            return request;
        }

        fetchData();
    }, [])

    const [movie, setMovie] = useState(null);
    const [favorite, setFavorite] = useState(null);
    const handleFav = (movie)=> {
        const f = !favorite
        setFavorite(f);
        window.localStorage.setItem(`favorite-${movie.title}`, JSON.stringify(f))
    }

    useEffect(()=>{
        if (movie===null) return
        const f = JSON.parse(window.localStorage.getItem(`favorite-${movie.title}`))
        setFavorite(f)
    },[movie])

    return (
        <Container fluid>
            <div className="container">
                <div className="float-child">
                    {movies.map((movie, id) => (
                        <div key={id}>
                            <Card style={{width: '18rem'}}>
                                <ListGroup variant="flush">
                                    <ListGroup.Item onClick={() => setMovie(movie)}>
                                        {movie.title}
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </div>
                    ))}
                </div>

                { movie ? <div className="child">
                            <Card style={{width: '40rem'}}>

                                <Card.Body>
                                    <span id="like"> {favorite ?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                         height="16" fill="currentColor"
                                                                         className="bi bi-heart-fill"
                                                                         viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                                        </svg> : null}
                                    </span>
                                    <Card.Title>Featured: {movie.title}</Card.Title>
                                    <Card.Text>
                                        <h6> Director: <br/> {movie.director} </h6>
                                        <h6> Producer: <br/> {movie.producer} </h6>
                                        <h6> Release date: <br/>{movie.release_date} </h6>
                                        <h6>Description: </h6> {movie.opening_crawl}
                                    </Card.Text>

                                    <button
                                            type="button"
                                            className="btn btn-primary"
                                            data-toggle="button"
                                            aria-pressed="false"
                                            autoComplete="off"
                                            onClick={() => handleFav(movie)}> {!favorite ? "Add to Favorite" : "Remove from Favorite"}</button>
                                </Card.Body>
                            </Card>
                </div> : null}
            </div>
        </Container>


    );
}

export default App;
