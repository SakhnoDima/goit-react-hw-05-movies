import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const films = ['film-1', 'film-2', 'film-3', 'film-4'];
  const [searchParams, setSearchParams] = useSearchParams();
  const filmId = searchParams.get('q') ?? '';

  const updateQueryString = event => {
    const searchQuery = event.target.value;
    if (searchQuery === '') {
      return setSearchParams({});
    }
    setSearchParams({ q: searchQuery });
  };
  return (
    <div>
      <h1>Movies</h1>
      <input value={filmId} type="text" onChange={updateQueryString} />
      {films.map(film => {
        return (
          <Link key={film} to={`${film}`}>
            {film}
          </Link>
        );
      })}
    </div>
  );
};

export default Movies;
