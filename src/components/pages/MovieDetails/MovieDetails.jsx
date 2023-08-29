import { fetchMovieById } from 'components/helpers/fetchFunctions';
import React, { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Product = () => {
  const [film, setFilm] = useState({});
  const location = useLocation();
  const { movieId } = useParams();

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const { data } = await fetchMovieById(movieId);
        setFilm(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchFilms();
  }, [movieId]);
  console.log(location);
  return (
    <div>
      <h2>Film details</h2>
      <h3>{film.title}</h3>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Link to={location.state?.from ?? '/'}>Back to Movies</Link>
      <Outlet />
    </div>
  );
};

export default Product;
