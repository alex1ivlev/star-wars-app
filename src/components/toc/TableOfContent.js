import React, {useState, useEffect} from "react";
import {Card, ListGroup} from "react-bootstrap";
import axios from "axios";
import {Link} from "react-router-dom";

function TableOfContent() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get("https://swapi.dev/api/films");
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [])
    console.table(movies);


    return (
        <div>
            {movies.map((movie, id)=> (
                <div key={id}>
                    <Card style={{width: '18rem'}}>
                        <ListGroup variant="flush">
                            <Link to= {`/${id}`}>
                                <ListGroup.Item>
                                    {movie.title}
                                </ListGroup.Item>
                            </Link>
                        </ListGroup>
                    </Card>

                </div>
                              ))}

                </div>
                )
            }
            export default TableOfContent;
