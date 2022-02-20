import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import noimage from "../Images/avatar.png";
import { GetMovieCast } from "../Services/MoviesApi";

function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function fetchMovieCast() {
      try {
        const data = await GetMovieCast(movieId);
        setCast(data.cast);
      }
      catch (error) {
        console.log(error);
      }
    }
    fetchMovieCast();
  }, [movieId]);

  return (
    <>
      <ul>
        {cast.map((item) => (
          <li key={item.id}>
            <img
              src={item.profile_path?`https://image.tmdb.org/t/p/w300${item.profile_path}`:noimage}
              alt={item.name}
              width="80"
            />
            <p>{item.name}</p>
            <p>Character: {item.character}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
export default MovieCast;