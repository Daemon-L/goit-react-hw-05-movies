import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "fbc25ee41500107f67823214e737d7bc";

export async function GetMoviesTrending() {
  const responce = await axios.get(
    `${BASE_URL}trending/movie/day?api_key=${API_KEY}`
  );
  return responce.data;
}

export async function GetMoviesSearch(searchQuery) {
  const responce = await axios.get(
    `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${searchQuery}`
  );
  return responce.data;
}

export async function GetMovieDetails(movie_id) {
  const responce = await axios.get(
    `${BASE_URL}/movie/${movie_id}?api_key=${API_KEY}`
  );
  return responce.data;
}

export async function GetMovieCast(movie_id) {
  const responce = await axios.get(
    `${BASE_URL}/movie/${movie_id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return responce.data;
}

export async function GetMovieReviews(movie_id) {
  const responce = await axios.get(
    `${BASE_URL}/movie/${movie_id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return responce.data;
}

// get-trending                https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>
// search-movies               https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
// get-movie-details           https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
// get-movie-credits cast      https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US
// get-movie-reviews           https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1