import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import noimage from "../Images/images_80x120.png";
import { GetMovieCast } from "../Services/MoviesApi";
import { Container, ActorCard, Text } from './MovieCast.styled'

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
      <Container>
        {cast.map((item) => (
          <ActorCard key={item.id}>
            <img
              src={item.profile_path?`https://image.tmdb.org/t/p/w300${item.profile_path}`:noimage}
              alt={item.name}
              width="80"
            />
            <h3>{item.name}</h3>
            <Text>Character: {item.character}</Text>
          </ActorCard>
        ))}
      </Container>
    </>
  );
}
export default MovieCast;