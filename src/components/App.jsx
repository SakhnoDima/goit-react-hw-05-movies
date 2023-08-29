import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';

import Movies from './pages/Movies/Movies';
import Home from './pages/Home/Home';
import MovieDetails from './pages/MovieDetails/MovieDetails';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<div>Details films ...</div>} />
          <Route path="reviews" element={<div>Actor films...</div>} />
        </Route>
        <Route path="*" element={<div>Not Found</div>} />
      </Route>
    </Routes>
  );
};
