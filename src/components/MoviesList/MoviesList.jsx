import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { GiFilmProjector } from 'react-icons/gi';
import { LinkItem } from './MoviesList.styles';

const MoviesList = ({ films }) => {
  const location = useLocation();
  return (
    <div>
      <ul>
        {films.map(({ id, title }) => (
          <li key={id}>
            <LinkItem to={`/movies/${id}`} state={{ from: location }}>
              <GiFilmProjector /> {title}
            </LinkItem>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
