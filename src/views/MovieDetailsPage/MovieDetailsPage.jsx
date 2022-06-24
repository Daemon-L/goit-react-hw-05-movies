import { useState, useEffect } from "react";
import { GetMovieDetails } from "../../Services/MoviesApi";
import { Outlet, useParams, Link, useLocation } from "react-router-dom";
import noimage from "../../Images/noimage.png";

import { Container, AdditionalContainer } from './MovieDetailsPage.styled'

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const data = await GetMovieDetails(movieId);
        setMovie(data);
      }
      catch (error) {
        console.log(error);
      }
    }
    fetchMovieDetails();
  }, [movieId]);
    
    return (
        <>
            <Link to={location?.state?.from ?? "/"}>
                 Go back
            </Link>
            <Container>
                <img
                    src={movie.poster_path?`https://image.tmdb.org/t/p/w300${movie.poster_path}`:noimage}
                    alt={movie.title}
                    width="300"
                />
                <div>
                    <h1>{movie.original_title} ({movie.release_date?.slice(0, 4)})</h1>
                    <p>User score: {movie.vote_average * 10}%</p>

                    <h2>Overview </h2>
                    <p>{movie.overview}</p>

                    <h2>Genres </h2>
                    <p>{movie.genres?.map((genre) => genre.name).join(", ")}</p>
                </div>
            </Container>
            <AdditionalContainer>   
            <h2>Additional information</h2>
                <ul>
                    <li>
                        <Link
                            to={`/movies/${movie.id}/cast`}
                            state={location?.state?.from && { from: location.state.from }}
                            >Cast
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={`/movies/${movie.id}/reviews`}
                            state={location?.state?.from && { from: location.state.from }}
                            >Reviews
                        </Link>
                    </li>
                </ul>
            </AdditionalContainer>
            <Outlet />
        </>
    );
}
export default MovieDetailsPage;