import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GetMoviesTrending } from "../Services/MoviesApi";

function ListMovies() { 
    const [results, setResults] = useState([]);
    
    useEffect(() => {
        async function fetchMovies() {
        try {
            const data = await GetMoviesTrending();
            setResults(data.results);
        }
        catch (error) {
            console.log(error);
        }}
        fetchMovies();
    }, []);
    
    return (
        <>
            <h1>Trending today</h1>

            <ul>
                {results.map((result) => (
                <li key={result.id}>
                    <Link to={`/movies/${result.id}`}>{result.original_title}</Link>
                </li>
                ))}
            </ul>
        
        </>
    );
}

export default ListMovies;