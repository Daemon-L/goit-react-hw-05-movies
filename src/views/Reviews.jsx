import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GetMovieReviews } from "../Services/MoviesApi";

function MovieReviewPage() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchMovieReviews() {
      setLoading(true);
      try {
        const data = await GetMovieReviews(movieId);
        setReviews(data.results);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    }
    fetchMovieReviews();
  }, [movieId]);

  return (
    <>
      <ul>
        {reviews.length > 0 ? (
            reviews.map((review) => (
              <li key={review.id}>
                <p>Author: {review.author}</p>
                <p>{review.content}</p>
              </li>
            ))
          ) : (<p>Sorry, there is not the review.</p>)
        }
      </ul>
    </>
  );
}
export default MovieReviewPage;