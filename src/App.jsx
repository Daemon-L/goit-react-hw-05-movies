import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";

import AppBar from "./Components/AppBar/AppBar";
import ListMovies from "./views/ListMovies";

const MoviesPage = lazy(() =>
  import("./views/MoviesPage.jsx")
);

const MovieDetailsPage = lazy(() =>
  import("./views/MovieDetailsPage/MovieDetailsPage")
);

const MovieCast = lazy(() =>
  import("./views/MovieCast/MovieCast")
);

const Reviews = lazy(() =>
  import("./views/Reviews.jsx")
);

function App() {
  return (
    <Suspense fallback="Loading...">
      <AppBar />
      <Routes>
        
        <Route index element={<ListMovies />} />
        <Route path="/movies" element={<MoviesPage />} />

        <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} >
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

      <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
}
export default App;