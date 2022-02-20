import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";

import AppBar from "./Components/AppBar/AppBar";
import ListMovies from "./views/ListMovies";
// import MoviesPage from "./views/MoviesPage";
// import MovieDetailsPage from "./views/MovieDetailsPage";
// import MovieCast from "./views/MovieCast";
// import Reviews from "./views/Reviews";

const MoviesPage = lazy(() =>
  import("./views/MoviesPage.jsx")
);

const MovieDetailsPage = lazy(() =>
  import("./views/MovieDetailsPage.jsx")
);

const MovieCast = lazy(() =>
  import("./views/MovieCast.jsx")
);

const Reviews = lazy(() =>
  import("./views/Reviews.jsx")
);

function App() {
  return (
    <Suspense fallback="Loading...">
      <Routes>
        <Route path="/" element={<AppBar />}>

          <Route index element={<ListMovies />} />
          <Route path="/movies" element={<MoviesPage />} />

          <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} >
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
}
export default App;

// '/movies' - компонент <MoviesPage>, страница поиска фильмов по ключевому слову.
// '/movies/:movieId' - компонент <MovieDetailsPage>, страница с детальной информацией о кинофильме.
// /movies/:movieId/cast - компонент <Cast>, информация о актерском составе. Рендерится на странице <MovieDetailsPage>.
// /movies/:movieId/reviews - компонент <Reviews>, информация об обзорах. Рендерится на странице <MovieDetailsPage>.
