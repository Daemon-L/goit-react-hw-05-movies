import './App.css';

import { Routes, Route, Navigate } from "react-router-dom";

import AppBar from "./Components/AppBar/AppBar";
import ListMovies from "./views/ListMovies";

function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<AppBar />}/>
        <Route index element={<ListMovies />} />

        {/* <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
        <Route path="/movies/:movieId/cast" element={<Cast />} />
        <Route path="/movies/:movieId/reviews" element={<Reviews />}/> */}


        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

    </div>
  );
}

export default App;

// '/movies' - компонент <MoviesPage>, страница поиска фильмов по ключевому слову.
// '/movies/:movieId' - компонент <MovieDetailsPage>, страница с детальной информацией о кинофильме.
// /movies/:movieId/cast - компонент <Cast>, информация о актерском составе. Рендерится на странице <MovieDetailsPage>.
// /movies/:movieId/reviews - компонент <Reviews>, информация об обзорах. Рендерится на странице <MovieDetailsPage>.
