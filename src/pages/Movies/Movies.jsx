import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { fetchMovieByDetails } from 'components/helpers/fetchFunctions';
import MoviesList from 'components/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';
import Form from 'components/Form/Form';

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
    event.preventDefault();
    const searchQuery = event.target.searchQuery.value;
    if (searchQuery === '') {
      return setSearchParams({});
    }
    setSearchParams({ q: searchQuery });
  };

  return (
    <div>
      <h2 style={{ marginBottom: 16 }}>Movies</h2>
      <Form updateQueryString={updateQueryString} />
      {loading && <Loader />}
      <MoviesList films={films} />
    </div>
  );
};

export default Movies;
