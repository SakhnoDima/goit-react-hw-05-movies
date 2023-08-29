import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const MoviesList = ({ popularFilms }) => {
  const location = useLocation();
  return (
    <div>
      <ul>
        {popularFilms.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
