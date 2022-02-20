import { useState, useEffect } from "react";
import { GetMoviesSearch } from "../Services/MoviesApi";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import Searchbar from "../Components/Searchbar/Searchbar";

function MoviesPage() {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    const query = searchParams.get("query");

    useEffect(() => {
        if (query) {
        async function searchMovies() {
            try {
            const data = await GetMoviesSearch(query);
            setMovies(data.results);
            } catch (error) {
            console.log(error);
            }
        }
        searchMovies();
        }
    }, [query]);
  
    return (
        <div>
            <Searchbar />
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                            {movie.original_title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default MoviesPage;