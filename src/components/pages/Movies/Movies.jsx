import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { fetchMovieByDetails } from 'components/helpers/fetchFunctions';
import MoviesList from 'components/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';

const Movies = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const filmId = searchParams.get('q') ?? '';

  useEffect(() => {
    const fetchFilmByKey = async () => {
      try {
        setLoading(true);
        const { results } = await fetchMovieByDetails(filmId);
        setFilms(results);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };
    fetchFilmByKey();
  }, [filmId]);

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
      {loading && <Loader />}
      <MoviesList films={films} />
    </div>
  );
};

export default Movies;
